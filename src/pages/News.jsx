import React, { Component, useState, useEffect } from 'react';
import { fetchArticles } from '../components/News/ApiService';
import { NewSearchFormClass, NewSearchFormHooks } from '../components/News/NewSearchForm';

import { Pending } from '../components/News/Pending';
import { Rejected } from '../components/News/Rejected';
import { Idle } from '../components/News/Idle';
import { Resolved } from '../components/News/Resolved';
import { NewsContainer } from '../components/News/News.styled.jsx';

import { useLocalStorage } from '../Hooks/useLocalStorage';

import { themeContext } from "context/authContext";


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class NewsClass extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    status: Status.IDLE,
  };

  abortController = new AbortController();

  componentDidUpdate(_, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.fetchData();
    };
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
    });
  };

  componentWillUnmount() {
    this.abortController.abort();
  }

  fetchData = async () => {
    const { currentPage, searchQuery } = this.state;
    const numberedCurrentPage = currentPage;
    const options = { searchQuery, numberedCurrentPage };
    this.setState({ status: Status.PENDING });

    try {
      await fetchArticles(options, this.abortController)
      .then((articles) => {
        console.log(articles);
      this.setState(prevState => ({
        articles: [...prevState.articles, ...articles],
        currentPage: prevState.currentPage + 1,
        status: Status.RESOLVED,
      }));
    })
    } catch (error) {
      this.setState({ status: Status.REJECTED })
    }
  };

  render() {
    const { articles, status } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && status === 'resolved';
    console.log(articles);
    console.log(this.state.currentPage);

    return (
      <themeContext.Consumer>
      {({mainTheme}) => (  
      <NewsContainer colors={mainTheme.colors}>
        <h1>News By Class</h1>
        {status === 'idle' && <Idle/>}
        {status === 'rejected' && <Rejected/>}
        <NewSearchFormClass onSubmit={this.onChangeQuery} />
        {status === 'resolved' && <Resolved articles={articles} shouldRenderLoadMoreButton={shouldRenderLoadMoreButton} onClick={this.fetchData}/>}
        {status === 'pending' && <Pending/>}
      </NewsContainer>
      )}
      </themeContext.Consumer>      
    );
  };
};

// console.log(`difference between || & ?? the same value in brackets, but different results (undefined XXX 1) ====> || = ${undefined || 1} && ?? = ${undefined ?? 1}`)
// console.log(`difference between || & ?? the same value in brackets, but different results (null XXX 1) ====> || = ${null || 1} && ?? = ${null ?? 1}`)
// console.log(`difference between || & ?? the same value in brackets, but different results (0 XXX 1) ====> || = ${0 || 1} && ?? = ${0 ?? 1}`)
// console.log(`difference between || & ?? the same value in brackets, but different results (false XXX true) ====> || = ${false || true} && ?? = ${false ?? true}`)

/*
* Let's add local storage to our app
*/

function NewsHooks() {
  const [articles, setArticles] = useLocalStorage('articles', []);
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    const abortController = new AbortController();

    if (!searchQuery || searchQuery === '') {
      return;
    };

    function mergeArrayUnique(arr1, arr2) {
      const reduced = arr1.filter(function(obj1) {
        return !arr2.find(function(obj2) {
          return obj1.url === obj2.url;
        });
      });
      return reduced.concat(arr2);
    };

    const numberedCurrentPage = Number(currentPage);
    const options = { searchQuery, numberedCurrentPage };
    setStatus(Status.PENDING);
    try {
      fetchArticles(options, abortController)
        .then((articles) => {
          setArticles(prevArticles => [...mergeArrayUnique(prevArticles, articles)]);
          setStatus(Status.RESOLVED);
         })
    } catch (error) {
      setStatus(Status.REJECTED);
    };
    return () => {
      abortController.abort();
    };
  }, [searchQuery, currentPage, setArticles]);

  // ! -------------------------------------------- LOCAL STORAGE ---------------------------------

  useEffect(() => {
    if (searchQuery !== '') {
      window.localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
    }
  }, [searchQuery]);


  useEffect(() => {
    if (currentPage !== 1) {
      window.localStorage.setItem('currentPage', JSON.stringify(currentPage));
    };
  }, [currentPage]);


  useEffect(() => {
    if (articles.length > 0) {
      window.localStorage.setItem('articles', JSON.stringify(articles));
    }
  }, [articles]);

  // ! -------------------------------------------- LOCAL STORAGE ---------------------------------

  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setArticles([]);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && status === 'resolved';

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (  
    <NewsContainer colors={mainTheme.colors}>
    <h1>News By Hooks</h1>
      {status === 'idle' && <Idle />}
      {status === 'rejected' && <Rejected />}
      <NewSearchFormHooks onSubmit={onChangeQuery} />
      {status === 'resolved' && <Resolved articles={articles} shouldRenderLoadMoreButton={shouldRenderLoadMoreButton} onClick={updatePage} />}
      {status === 'pending' && <Pending />}
    </NewsContainer>
      )}
      </themeContext.Consumer>      
  );
};

export function News() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <NewsClass />
      <NewsHooks />
    </div>
  );
};

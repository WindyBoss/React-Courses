import React, { useState, useEffect, useContext } from 'react';
import { fetchArticles } from '../../services/ApiService';
import { NewSearchFormHooks } from './components/NewSearchForm';

import { Pending } from './components/state/Pending';
import { Rejected } from './components/state/Rejected';
import { Idle } from './components/state/Idle';
import { Resolved } from './components/state/Resolved';
import { NewsContainer } from './styles/News.styled.jsx';

import { useLocalStorage } from 'hooks';

import { themeContext } from 'context/authContext';
import { useSearchParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export function News() {
  const [articles, setArticles] = useLocalStorage('articles', []);
  const [currentPage, setCurrentPage] = useLocalStorage('currentPage', 1);
  const [status, setStatus] = useState(Status.IDLE);

  const { mainTheme } = useContext(themeContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const abortController = new AbortController();

    function mergeArrayUnique(arr1, arr2) {
      const reduced = arr1.filter(function (obj1) {
        return !arr2.find(function (obj2) {
          return obj1.url === obj2.url;
        });
      });
      return reduced.concat(arr2);
    };

    const paramsSearch = searchParams.get('search');

    const numberedCurrentPage = Number(currentPage);
    const options = { searchQuery: paramsSearch, numberedCurrentPage };
    setStatus(Status.PENDING);
    try {
      fetchArticles(options, abortController).then(articles => {
        setArticles(prevArticles => [
          ...mergeArrayUnique(prevArticles, articles),
        ]);
        setStatus(Status.RESOLVED);
      });
    } catch (error) {
      setStatus(Status.REJECTED);
    }
    return () => {
      abortController.abort();
    };
  }, [currentPage, setArticles, setSearchParams, searchParams]);

  // ! -------------------------------------------- LOCAL STORAGE ---------------------------------

  useEffect(() => {
    if (currentPage !== 1) {
      window.localStorage.setItem('currentPage', JSON.stringify(currentPage));
    }
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
    setSearchParams({search: query});
    setCurrentPage(1);
    setArticles([]);
  };

  const shouldRenderLoadMoreButton =
    articles.length > 0 && status === 'resolved';

  return (
    <NewsContainer colors={mainTheme.colors}>
      <h1>News By Hooks</h1>
      {status === 'idle' && <Idle />}
      {status === 'rejected' && <Rejected />}
      <NewSearchFormHooks onSubmit={onChangeQuery} />
      {status === 'resolved' && (
        <Resolved
          articles={articles}
          shouldRenderLoadMoreButton={shouldRenderLoadMoreButton}
          onClick={updatePage}
        />
      )}
      {status === 'pending' && <Pending />}
    </NewsContainer>
  );
}

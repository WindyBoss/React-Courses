import React, { Component, useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

import { LinearProgressStyled } from '../components/globalStyles';

import { Controls } from '../components/Reader/Controls';
import { Progress } from '../components/Reader/Progress';
import { TextWrapper } from '../components/Reader/TextWrapper';
import { ReaderAdmin } from 'components/Reader/ReaderAdmin';
import { ButtonStyled } from '../components/globalStyles';

import { themeContext } from "context/authContext";

import * as API from '../services/readerApi';
import { withApiState } from '../services/ApiState';

const LS_KEY = 'reader_item_index_API';
const LS_KEY_Hooks = 'reader_Hooks_API';

class ReaderClass extends Component {
  state = {
    index: localStorage.getItem(LS_KEY) ? Number(localStorage.getItem(LS_KEY)) : 0,
    articles: [],
  };
  abortController = new AbortController();

  deleteItem = async () => {
    const { index, articles } = this.state;
    const { apiState } = this.props;
    const currentPublication = articles[index];

    apiState.pending();
    try { 
      await API.deletePublications(currentPublication.id);
      if (index === 0) {
        this.setState(prevState => ({
            articles: prevState.articles.filter(articles => articles.id !== currentPublication.id),
            index: prevState.index
      }))} else {
        this.setState(prevState => ({
            articles: prevState.articles.filter(articles => articles.id !== currentPublication.id),
            index: prevState.index - 1
        }));
      }
      apiState.success();
      toast.success("Publication was deleted!");
    } catch (error) {
      apiState.error();
    };
  };

  makeFetch = async () => {
    const { apiState } = this.props;
    apiState.pending();
        
    try {
        const articles = await API.getPublications();
        this.setState({ articles });
        apiState.success();
    } catch (error) {
        apiState.error();
    };  
  }

  changeIndex = value => {
    const { index, articles } = this.state;
    const publicationNumber = articles.length;

    switch (index + value) {
      case publicationNumber:
      this.setState({ index: 0 });
      break;
      case -1:
      this.setState({ index: publicationNumber - 1 });
      break;
      default:
      this.setState(state => ({ index: state.index + value }));
    };
  };

  componentWillUnmount() {
    this.abortController.abort();
  };

  componentDidMount = () => {
    this.makeFetch();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, Number(this.state.index));
    };

    if(prevProps.checkArticle !== this.props.checkArticle) {
      this.makeFetch();
    }
  };

  render() {
    const { apiState } = this.props;
    const { index, articles } = this.state;
    const currentPublication = articles[index];

    return (
      <themeContext.Consumer>
      {({mainTheme}) => (
        <>
        { apiState.isIdle() && <div>Publications did not come yet!</div> }

        { apiState.isPending() &&
          <LinearProgressStyled colors={mainTheme.colors} addFeat={{      
            marginTop: '150px', 
            maxWidth: '30%', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            height: ' 30px',
            borderRadius: '5px',
        }}/>
        }

        { apiState.isSuccess() && (
            <ProgressContainer 
            onClick={this.changeIndex} 
            colors={mainTheme.colors} 
            currentIndex={index} 
            currentPublication={currentPublication}
            deletePublications={this.deleteItem} 
            totalPublications={articles.length}/>
         )}

         { apiState.isError() && <div>Oops we failed sorry </div> }
        </>
      )}
      </themeContext.Consumer>          
    );
  };
};


const ReaderHooks = ({apiState, checkArticle}) => {
  const [index, setIndex] = useState(localStorage.getItem(LS_KEY_Hooks) ? Number(localStorage.getItem(LS_KEY_Hooks)) : 0);
  const [articles, setArticles] = useState([]);

  const deleteItem = async () => {
    const currentPublication = articles[index];
    apiState.pending();
    try { 

      await API.deletePublications(currentPublication.id);
      setArticles(prevArt => prevArt.filter(articles => articles.id !== currentPublication.id));

      if (index === 0) {
        setIndex(prevInd => prevInd);
      } else {
        setIndex(prevInd => prevInd - 1);
      }

      apiState.success();
      toast.success("Publication was deleted!");
    } catch (error) {
      apiState.error();
    };
  };

  const changeIndex = value => {
    const publicationNumber = articles.length;

    switch (index + value) {
      case publicationNumber:
        setIndex(0);
        break;
      case -1:
        setIndex(publicationNumber - 1);
        break;
      default:
        setIndex(prevInd => prevInd + value);
    };
  };

  const fetchData = useCallback(async () => { // useCallback is used as useMemo, but for functions, which helps to optimize performance, by keeping the function away from re-rendering
      apiState.pending();    
      try {
        const data = await API.getPublications();
        setArticles(data);
        apiState.success();
      } catch (error) {
        apiState.error();
      }; 
  },[apiState]);

  useEffect(() => {
    const abortController = new AbortController();   
    // const getArticles = async () => {
    //   const data = await API.getPublications();
    //   setArticles(data);
    //   apiState.success();
    // };

    // apiState.pending();    
    // try {
    //   getArticles();      
    // } catch (error) {
    //   apiState.error();
    // }; 

  //  (async function getArticles () {
  //   apiState.pending();    
  //   try {
  //     const data = await API.getPublications();
  //     setArticles(data);
  //     apiState.success();
  //   } catch (error) {
  //     apiState.error();
  //   }; 
  //   })(); // other type of calling the function


    fetchData();

    return () => {
      abortController.abort();
    }; 

  },[ apiState, checkArticle, fetchData ])

  useEffect(() => {
    localStorage.setItem( LS_KEY_Hooks, Number(index) );
  },[ index ]);

  index > articles.length - 1 ?? setIndex(articles.length - 1);

  return (
    <themeContext.Consumer>
      {({mainTheme}) => (
        <>
          { apiState.isIdle() && <div>Publications did not come yet!</div> }

          { apiState.isPending() &&
            <LinearProgressStyled colors={ mainTheme.colors } addFeat={{      
              marginTop: '150px', 
              maxWidth: '30%', 
              marginLeft: 'auto', 
              marginRight: 'auto', 
              height: ' 30px',
              borderRadius: '5px',
            }}/>
          }

          { apiState.isSuccess() && (
              <ProgressContainer 
              onClick={ changeIndex } 
              colors={ mainTheme.colors } 
              currentIndex={ index } 
              currentPublication={ articles[index] }
              deletePublications={ deleteItem } 
              totalPublications={ articles.length }/>
          )}

          { apiState.isError() && <div>Oops we failed sorry </div> }
        </>
      )}
    </themeContext.Consumer>          
  );
};

const ReaderClassWrapper = withApiState( ReaderClass );
const ReaderHooksWrapper = withApiState( ReaderHooks );

export const ReaderWithApi = () => {
  const [ checkArticle, setCheckArticle ] = useState(false);

  useEffect(() => {
    if( checkArticle ) {
      setCheckArticle(false);
    }
  },[ checkArticle ])

  return (
    <div style={{position: 'relative'}}>
      <ReaderClassWrapper checkArticle={ checkArticle }/>
      <ReaderHooksWrapper checkArticle={ checkArticle }/>
      <ReaderAdmin onSubmit={ setCheckArticle } />
    </div>
  )
}

const ProgressContainer = ({ onClick, colors, currentIndex, currentPublication, totalPublications, deletePublications }) => {
  return (
    <>
    <div style={{width: '100%', marginTop: '30px', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Controls
          onClick={ onClick }
          colors={ colors }
        >
          <Progress
            colors={ colors }
            current={ currentIndex }
            total={ totalPublications }
          />
        </Controls>
      </div>

        <TextWrapper
            publication={ currentPublication }
            colors={ colors }
        >
        <ButtonStyled colors={ colors } addFeat={{ position: 'absolute', top: '10px', right: '10px' }} onClick={() => deletePublications()}>Delete Publication</ButtonStyled>
        </TextWrapper>
    </>  )
};
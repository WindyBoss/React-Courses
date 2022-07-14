import React, { useContext, useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

import { LinearProgressStyled } from '../../../components/CommonComponents';

import { Controls } from '../common/components/Controls';
import { Progress } from '../common/components/Progress';
import { TextWrapper } from '../common/components/TextWrapper';
import { ReaderAdmin } from './components/ReaderAdmin';
import { ButtonStyled } from 'components/CommonComponents';

import { themeContext } from 'context/authContext';

import * as API from '../../../services/readerApi';
import { withApiState } from '../../../services/ApiState';

const LS_KEY_Hooks = 'reader_Hooks_API';

const ReaderHooks = ({ apiState, checkArticle }) => {
  const { mainTheme } = useContext(themeContext);
  const [index, setIndex] = useState(
    localStorage.getItem(LS_KEY_Hooks)
      ? Number(localStorage.getItem(LS_KEY_Hooks))
      : 0
  );
  const [articles, setArticles] = useState([]);

  const deleteItem = async () => {
    const currentPublication = articles[index];
    apiState.pending();
    try {
      await API.deletePublications(currentPublication.id);
      setArticles(prevArt =>
        prevArt.filter(articles => articles.id !== currentPublication.id)
      );

      if (index === 0) {
        setIndex(prevInd => prevInd);
      } else {
        setIndex(prevInd => prevInd - 1);
      }

      apiState.success();
      toast.success('Publication was deleted!');
    } catch (error) {
      apiState.error();
    }
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
    }
  };

  const fetchData = useCallback(async () => {
    apiState.pending();
    try {
      const data = await API.getPublications();
      setArticles(data);
      apiState.success();
    } catch (error) {
      apiState.error();
    }
  }, [apiState]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [apiState, checkArticle, fetchData]);

  useEffect(() => {
    localStorage.setItem(LS_KEY_Hooks, Number(index));
  }, [index]);

  index > articles.length - 1 ?? setIndex(articles.length - 1);

  return (
    <>
      {apiState.isIdle() && <div>Publications did not come yet!</div>}

      {apiState.isPending() && (
        <LinearProgressStyled
          colors={mainTheme.colors}
          addFeat={{
            marginTop: '150px',
            maxWidth: '30%',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: ' 30px',
            borderRadius: '5px',
          }}
        />
      )}

      {apiState.isSuccess() && (
        <ProgressContainer
          onClick={changeIndex}
          colors={mainTheme.colors}
          currentIndex={index}
          currentPublication={articles[index]}
          deletePublications={deleteItem}
          totalPublications={articles.length}
        />
      )}

      {apiState.isError() && <div>Oops we failed sorry </div>}
    </>
  );
};

export const ReaderHooksWrapper = withApiState(ReaderHooks);

export const ReaderWithApi = () => {
  const [checkArticle, setCheckArticle] = useState(false);

  useEffect(() => {
    if (checkArticle) {
      setCheckArticle(false);
    }
  }, [checkArticle]);

  return (
    <div style={{ position: 'relative' }}>
      <ReaderHooksWrapper checkArticle={checkArticle} />
      <ReaderAdmin onSubmit={setCheckArticle} />
    </div>
  );
};

const ProgressContainer = ({
  onClick,
  colors,
  currentIndex,
  currentPublication,
  totalPublications,
  deletePublications,
}) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          marginTop: '30px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Controls onClick={onClick} colors={colors}>
          <Progress
            colors={colors}
            current={currentIndex}
            total={totalPublications}
          />
        </Controls>
      </div>

      <TextWrapper publication={currentPublication} colors={colors}>
        <ButtonStyled
          colors={colors}
          addFeat={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={() => deletePublications()}
        >
          Delete Publication
        </ButtonStyled>
      </TextWrapper>
    </>
  );
};

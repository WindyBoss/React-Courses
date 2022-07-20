import React, { useContext } from 'react';

import {
  LinearProgressStyled,
  ErrorContainer,
} from 'components/CommonComponents';
import { TextWrapper } from '../../common/components/TextWrapper';

import { useFetch } from 'hooks';

import { getPublication } from 'services/readerApi';

import { useParams } from 'react-router-dom';

import { themeContext } from 'context/authContext';
import { withApiState } from 'services/ApiState';

export const ListPageNoState = ({ apiState }) => {
  const { mainTheme } = useContext(themeContext);

  let { publicationId } = useParams();

  const { state } = useFetch({
    fetchFunc: getPublication,
    apiState: apiState,
    firstRenderCheck: false,
    initialValue: null,
    addProp: publicationId,
  });

  return (
    <>
      {apiState.isIdle() && <div>Publication did not come yet!</div>}

      {apiState.isPending() && (
        <>
          <LinearProgressStyled
            colors={mainTheme.colors}
            addFeat={{
              position: 'fixed',
              top: '459px',
              right: '50%',
              transform: 'translateX(50%)',
              minWidth: '30%',
              height: ' 30px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </>
      )}

      {apiState.isSuccess() && (
        <div style={ContainerStyle}>
          <TextWrapper publication={state} colors={mainTheme.colors} />
        </div>
      )}

      {apiState.isError() && <ErrorContainer text="Oops we failed sorry" />}
    </>
  );
};

export const ListPage = withApiState(ListPageNoState);

const ContainerStyle = {
  position: 'fixed',
  top: '400px',
  right: '50px',
  minWidth: '1000px',
};

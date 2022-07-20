import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import {
  ButtonStyled,
  TextFieldStyled,
  ErrorContainer,
  LinearProgressStyled,
} from 'components/CommonComponents';

import { themeContext } from 'context/authContext';
import { FormContainer } from '../../common/styles/Reader.styled';
import toast from 'react-hot-toast';

import { createPublications } from 'services/readerApi';
import { withApiState } from 'services/ApiState';

import { useNavigate } from 'react-router-dom';

export const CreatePublicationNoState = ({ apiState }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { mainTheme } = useContext(themeContext);

  const navigate = useNavigate();

  const setField = e => {
    const value = e.target.value.trim(' ');
    if (value === '') {
      return;
    }
    switch (e.target.name) {
      case 'title':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
    }
  };

  const addPublication = async () => {
    if (title === '') {
      toast.error('add Title');
      return;
    }
    if (text === '') {
      toast.error('add Text');
      return;
    }

    const publication = {
      title: title,
      text: text,
      id: nanoid(),
    };

    apiState.pending();
    try {
      await createPublications(publication);
      toast.success('Publication added');
      apiState.idle();
    } catch (err) {
      apiState.error();
    }

    setText('');
    setTitle('');
    navigate('/react-homework-template/ReaderWithApi/preview')
  };

  return (
    <>
      <>
        {apiState.isError() && (
          <>
            <ErrorContainer text="Something went wrong, try please later" />
          </>
        )}
        {apiState.isPending() && (
          <>
            <LinearProgressStyled
              colors={mainTheme.colors}
              addFeat={{
                marginTop: '350px',
                maxWidth: '500px',
                height: ' 30px',
                borderRadius: '5px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            />
          </>
        )}
        {apiState.isIdle() && (
          <>
            <FormContainer colors={mainTheme.colors}>
              <p style={{ marginBottom: '10px', fontSize: '20px' }}>
                Add Publication
              </p>
              <TextFieldStyled
                onChange={setField}
                name="title"
                type="text"
                value={title}
                addFeat={{
                  minWidth: '300px',
                  marginBottom: '25px',
                  marginRight: 'auto',
                }}
                colors={mainTheme.colors}
                label="Title"
              />
              <TextareaAutosize
                style={{
                  border: `1px solid ${mainTheme.colors.btnBgColor}`,
                  backgroundColor: 'transparent',
                  color: mainTheme.colors.mainText,
                  maxWidth: '100%',
                  minHeight: '200px',
                  minWidth: '100%',
                  marginRight: 'auto',
                  marginBottom: '30px',
                  font: 'inherit',
                }}
                onChange={setField}
                name="text"
                type="text"
                value={text}
              />
              <ButtonStyled onClick={addPublication} colors={mainTheme.colors}>
                Add new Publication
              </ButtonStyled>
            </FormContainer>
          </>
        )}
      </>
    </>
  );
};

export const CreatePublication = withApiState(CreatePublicationNoState);

import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { ButtonStyled, TextFieldStyled } from '../globalStyles';
import { themeContext } from "../../context/authContext";
import { FormContainer } from './Reader.styled';
import toast from 'react-hot-toast';

import { LinearProgressStyled } from '../globalStyles';

import { ModalWindow } from '../TodoList/ModalWindow';

import * as API from '../../services/readerApi';
import { withApiState } from '../../services/ApiState';

export const Reader = ({apiState, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(prevModal => (!prevModal))
      };

    const setField = (e) => {
        const value = e.target.value.trim(' ');
        if (value === '') {
            return;
        };
        switch (e.target.name) {
            case 'title':
                setTitle(value);
                break;
            case 'text':
                setText(value);
                break;
            default: 
        };
    };

    const addPublication = async () => {
        if(title === '') {
            toast.error('add Title');
            return;
        } 
        if (text === '') {
            toast.error('add Text');
            return;
        };

        const publication = {
            title: title,
            text: text,
            id: nanoid(),
        };
        apiState.pending();
        try {
            const res = await API.createPublications(publication);
            onSubmit(true);
            apiState.success();
        } catch (err) {
            apiState.error();  
            toast.error('Something went wrong, please try again later');
        };

        setText('');
        setTitle('');
        apiState.idle();         
        toggleModal();       
    };

    return (
      <themeContext.Consumer>
      {({mainTheme}) => {
        const { colors } = mainTheme;
        return (
            <>
                <ButtonStyled onClick={toggleModal} addFeat={{position: 'absolute', left: '30px', top: '30px'}} colors={mainTheme.colors}>Add publication</ButtonStyled>
                { modalOpen && (
                    <>
                        { apiState.isError() && (
                            <>
                                <ModalWindow colors={mainTheme.colors} loader='loader' onClick={toggleModal}>
                                    <h2>Something went wrong, try please later</h2>
                                </ModalWindow> 
                            </>
                        )}
                        { apiState.isPending() && (
                            <>
                                <ModalWindow colors={mainTheme.colors} loader='loader' onClick={toggleModal}>
                                    <LinearProgressStyled colors={mainTheme.colors} addFeat={{      
                                        marginTop: '150px', 
                                        minWidth: '300px', 
                                        height: ' 30px',
                                        borderRadius: '5px',
                                        margin: 'auto',
                                    }}/>
                                </ModalWindow> 
                            </>
                        )}
                        { apiState.isIdle() && (
                            <>
                                <ModalWindow colors={mainTheme.colors} onClick={toggleModal}>                                
                                    <FormContainer colors={colors}>
                                        <p style={{marginBottom: '10px', fontSize: '20px'}}>Add Publication</p>
                                        <TextFieldStyled 
                                            onChange={setField}
                                            name='title'
                                            type='text'
                                            value={title}
                                            addFeat={{minWidth: '300px', marginBottom: '25px', marginRight: 'auto'}} colors={colors} label='Title'/>
                                        <TextareaAutosize style={{
                                            border: `1px solid ${colors.btnBgColor}`,
                                            backgroundColor: 'transparent',
                                            color: colors.mainText,
                                            maxWidth: '100%', 
                                            minHeight: '200px',
                                            minWidth: '100%', 
                                            marginRight: 'auto', 
                                            marginBottom: '30px',
                                            font: 'inherit' 
                                        }}
                                            onChange={setField}
                                            name='text'
                                            type='text'
                                            value={text}/>
                                        <ButtonStyled 
                                            onClick={addPublication} 
                                            colors={colors}
                                        >Add new Publication</ButtonStyled>
                                    </FormContainer>
                                </ModalWindow> 
                            </>
                        )}
                    </>                    
                )}
            </>
        )}}
        </themeContext.Consumer>    
    );
};

export const ReaderAdmin = withApiState(Reader);
  
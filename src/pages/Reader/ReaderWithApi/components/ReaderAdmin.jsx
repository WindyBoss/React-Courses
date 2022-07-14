import React, { useState, useContext} from 'react';
import { nanoid } from 'nanoid'
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { ButtonStyled, TextFieldStyled } from 'components/CommonComponents';

import { themeContext } from "../../../../context/authContext";
import { FormContainer } from '../../common/styles/Reader.styled';
import toast from 'react-hot-toast';

import { LinearProgressStyled } from 'components/CommonComponents';

import ModalWindow from '../../../../components/ModalWindow';

import * as API from '../../../../services/readerApi';
import { withApiState } from '../../../../services/ApiState';

import { useModal } from 'hooks';

export const Reader = ({apiState, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [modalOpen, toggleModal] = useModal(false);

    const { mainTheme } = useContext(themeContext);

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
            toast.success('Publication added');
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
                                    <FormContainer colors={mainTheme.colors}>
                                        <p style={{marginBottom: '10px', fontSize: '20px'}}>Add Publication</p>
                                        <TextFieldStyled 
                                            onChange={setField}
                                            name='title'
                                            type='text'
                                            value={title}
                                            addFeat={{minWidth: '300px', marginBottom: '25px', marginRight: 'auto'}} colors={mainTheme.colors} label='Title'/>
                                        <TextareaAutosize style={{
                                            border: `1px solid ${mainTheme.colors.btnBgColor}`,
                                            backgroundColor: 'transparent',
                                            color: mainTheme.colors.mainText,
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
                                            colors={mainTheme.colors}
                                        >Add new Publication</ButtonStyled>
                                    </FormContainer>
                                </ModalWindow> 
                            </>
                        )}
                    </>                    
                )}
            </>
    );
};

export const ReaderAdmin = withApiState(Reader);
  
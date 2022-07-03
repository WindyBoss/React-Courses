import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';

import { ThemeSwitcher } from "./ThemeSwitcher.styled.jsx";

import CounterPage from '../pages/Counter';
import { SignupForm } from '../pages/SignupForm';
import ColorPicker from '../pages/ColorPicker';
import { Clock } from '../pages/Clock';
import { News } from '../pages/News';
import { Video } from '../pages/Video';
import { Reader } from '../pages/Reader';
import { ReaderWithApi } from '../pages/ReaderWithApi';
import { Pokemon } from '../pages/Pokemon';
import Friends from 'pages/Friend.jsx';

import SkipEffectOnFirstRender from 'pages/SkipEffectOnFirstRender.jsx';

import Tabs from '../pages/Tabs';
import TodoList from '../pages/Todolist';

import videos from '../data/video.json';
import publications from '../data/publications.json';
import tabs from '../data/tabs.json';
import todos from '../data/todos.json';

import Appbar from './Appbar';
import { GlobalStyle } from './globalStyles';

import { themeContext } from '../context/authContext';

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'yellow', color: 'yellow' },
  { label: 'black', color: 'black' },
  { label: 'white', color: 'white' },
  { label: 'pink', color: 'pink' },
  { label: 'purple', color: 'purple' },
  { label: 'orange', color: 'orange' },
]

export default function App () {
    return (
      <themeContext.Consumer>
      {({mainTheme, changeTheme}) => {
        return (
        <div>
          <GlobalStyle theme={mainTheme} />
          <ThemeSwitcher colors={mainTheme.colors}>
            <IconButton onClick={changeTheme} aria-label="change theme">
              {
              mainTheme.id === 'light' ? 
                <NightlightTwoToneIcon fontSize='large' color="primary" /> : 
                <LightModeTwoToneIcon fontSize='large' color="secondary"/>
              }
            </IconButton>
          </ThemeSwitcher>

          <BrowserRouter>
            <Routes>
              <Route path="/react-homework-template/" element={<Appbar/>}>
                <Route path="/react-homework-template/Counter" element={<CounterPage />} />
                <Route path="/react-homework-template/SignupForm" element={<SignupForm />} />
                <Route path='/react-homework-template/ColorPicker' element={<ColorPicker options={colorPickerOptions} />} />
                <Route path="/react-homework-template/Clock" element={<Clock />} />
                <Route path="/react-homework-template/News" element={<News />} />
                <Route path="/react-homework-template/Video" element={<Video videos={videos} />} />
                <Route path="/react-homework-template/Reader" element={<Reader publications={publications} />} />
                <Route path="/react-homework-template/ReaderWithApi" element={<ReaderWithApi/>} />
                <Route path="/react-homework-template/Tabs" element={<Tabs items={tabs} />} />
                <Route path="/react-homework-template/TodoList" element={<TodoList colors={mainTheme.colors} todos={todos} />} />
                <Route path="/react-homework-template/Pokemon" element={<Pokemon />} />              
                <Route path="/react-homework-template/SkipEffectOnFirstRender" element={<SkipEffectOnFirstRender />} />              
                <Route path="/react-homework-template/Friends" element={<Friends />} />              
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
       )}}
      </themeContext.Consumer>
    );
};

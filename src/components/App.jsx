import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';

import { ThemeSwitcher } from './AppLayoutStyles.jsx';

import {
  CounterPage,
  SignupForm,
  ColorPicker,
  Clock,
  News,
  Video,
  Reader,
  ReaderWithApi,
  Pokemon,
  Friends,
  MediaPlayer,
  SkipEffectOnFirstRender,
  Tabs,
  TodoList,
  Homepage,
} from '../pages';

import videos from '../data/video.json';
import publications from '../data/publications.json';
import tabs from '../data/tabs.json';
import todos from '../data/todos.json';

import Appbar from './Appbar';

import { GlobalStyle } from './CommonComponents';
import { themeContext } from '../context/authContext';

export default function App() {
  const { mainTheme, changeTheme } = useContext(themeContext);
  return (
    <div>
      <GlobalStyle theme={mainTheme} />
      <BrowserRouter>
        <ThemeSwitcher colors={mainTheme.colors}>
          <IconButton onClick={changeTheme} aria-label="change theme">
            {mainTheme.id === 'light' ? (
              <NightlightTwoToneIcon fontSize="large" color="primary" />
            ) : (
              <LightModeTwoToneIcon fontSize="large" color="secondary" />
            )}
          </IconButton>
        </ThemeSwitcher>
        <Routes>
          <Route path="/react-homework-template/" element={<Appbar />}>
            <Route index element={<Homepage />} />
            <Route path="Counter" element={<CounterPage />} />
            <Route path="SignupForm" element={<SignupForm />} />
            <Route path="ColorPicker" element={<ColorPicker />} />
            <Route path="Clock" element={<Clock />} />
            <Route path="News" element={<News />} />
            <Route path="Video" element={<Video videos={videos} />} />
            <Route path="Reader" element={<Reader publications={publications} />} />
            <Route path="ReaderWithApi" element={<ReaderWithApi />} />
            <Route path="Tabs" element={<Tabs items={tabs} />} />
            <Route path="TodoList" element={<TodoList todos={todos} />} />
            <Route path="Pokemon" element={<Pokemon />} />
            <Route path="SkipEffectOnFirstRender" element={<SkipEffectOnFirstRender />}/>
            <Route path="Friends" element={<Friends />} />
            <Route path="MediaPlayer" element={<MediaPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

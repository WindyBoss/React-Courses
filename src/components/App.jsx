import React, { useContext, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { IconButton } from '@mui/material';
import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary';

import { ThemeSwitcher } from './AppLayoutStyles.jsx';

import videos from '../data/video.json';
import publications from '../data/publications.json';
import tabs from '../data/tabs.json';
import todos from '../data/todos.json';

import Appbar from './Appbar';

import { GlobalStyle } from './CommonComponents';
import { themeContext } from 'context/authContext';

import RedirectContainer from './RedirectContainer';
import {
  reactLazyLoad,
  reactLazyLoadReaderApi,
} from 'helpers/reactLazyLoad.js';

import { ReaderAppbar } from 'pages';
import { ReactInternetSpeedMeter } from 'react-internet-meter';
import { LinearProgressStyled } from './CommonComponents';

/* 
* reactLazyLoad - custom function, which helps to split the code into multiple components, 
which are downloaded not during the first open of page, but when they are necessary
All export must be default
*/
const CounterPage = reactLazyLoad('Counter');
const SignupForm = reactLazyLoad('SignupForm');
const ColorPicker = reactLazyLoad('ColorPicker');
const Clock = reactLazyLoad('Clock');
const News = reactLazyLoad('News');
const Video = reactLazyLoad('Video');
const Reader = reactLazyLoad('Reader');
const Pokemon = reactLazyLoad('Pokemon');
const Friends = reactLazyLoad('Friends');
const MediaPlayer = reactLazyLoad('MediaPlayer');
const SkipEffectOnFirstRender = reactLazyLoad('SkipEffectOnFirstRender');
const Tabs = reactLazyLoad('Tabs');
const TodoList = reactLazyLoad('Todolist');
const HomePage = reactLazyLoad('HomePage');
const ListPage = reactLazyLoadReaderApi('ListPage');
const PublicationList = reactLazyLoadReaderApi('PublicationList');
const CreatePublication = reactLazyLoadReaderApi('CreatePublication');
const Preview = reactLazyLoadReaderApi('Preview');

function App() {
  const { mainTheme, changeTheme } = useContext(themeContext);
  // The next state helps to measure the speed of the internet and set as variable
  const [internetSpeed, setInternetSpeed] = useState(0);
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo)
  );

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
        {/* component from library for internet speed measurement | Do not use in App, because is rerender the whole application  */}
        <ReactInternetSpeedMeter
          outputType="alert"
          customClassName={null}
          txtMainHeading=""
          pingInterval={10000}
          thresholdUnit="megabyte"
          threshold={100}
          imageUrl="https://akniga.org/uploads/media/topic/2020/06/25/14/preview/cc51e6e00e4b07c43095_400x.jpg"
          downloadSize="1781287"
          callbackFunctionOnNetworkTest={speed => setInternetSpeed(speed)}
        />
        {/* The component with lazy loading must the replaced before they are loaded to some component or JS will show mistake, so Suspense is used */}
        {error ? (
          <div>
            <p>{error.message}</p>
            <button onClick={resetError}>Try again</button>
          </div>
        ) : (
          <Suspense
            fallback={
              internetSpeed > 100 ? (
                ''
              ) : (
                <LinearProgressStyled
                  colors={mainTheme.colors}
                  addFeat={{
                    minWidth: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: ' 30px',
                    borderRadius: '5px',
                  }}
                />
              )
            }
          >
            <Routes>
              <Route path="/react-homework-template/" element={<Appbar />}>
                <Route index element={<HomePage />} />
                <Route path="Counter" element={<CounterPage />} />
                <Route path="SignupForm" element={<SignupForm />} />
                <Route path="ColorPicker" element={<ColorPicker />} />
                <Route path="Clock" element={<Clock />} />
                <Route path="News" element={<News />} />
                <Route path="Video" element={<Video videos={videos} />} />
                <Route
                  path="Reader"
                  element={<Reader publications={publications} />}
                />
                <Route path="ReaderWithApi" element={<ReaderAppbar />}>
                  <Route
                    index
                    element={
                      <RedirectContainer containerText="Choose Preview Button" />
                    }
                  />

                  <Route path="preview" element={<Preview />}>
                    <Route path=":publicationId" element={<ListPage />} />
                  </Route>
                  <Route path="list" element={<PublicationList />}>
                    <Route path=":publicationId" element={<ListPage />} />
                  </Route>
                  <Route path="create" element={<CreatePublication />} />
                  <Route
                    path="*"
                    element={
                      <RedirectContainer containerText="Sorry There is no such way" />
                    }
                  />
                </Route>
                <Route path="Tabs" element={<Tabs items={tabs} />} />
                <Route path="TodoList" element={<TodoList todos={todos} />} />
                <Route path="Pokemon" element={<Pokemon />} />
                <Route
                  path="SkipEffectOnFirstRender"
                  element={<SkipEffectOnFirstRender />}
                />
                <Route path="Friends" element={<Friends />} />
                <Route
                  path="MediaPlayer"
                  element={
                    <MediaPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                  }
                />
                <Route
                  path="*"
                  element={
                    <RedirectContainer containerText="Sorry There is no such way" />
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        )}
      </BrowserRouter>
    </div>
  );
}

export default withErrorBoundary(App);

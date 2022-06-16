import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

import items from '../data/tabs.json';
import tasks from '../data/todos.json';
import videos from '../data/videos.json';
import publications from '../data/publications.json';

import Clock from './Clock';
import Tabs from './Tabs';
import TodoList from "./TodoList";
import { Video } from './Player/Video';
import Reader from './Reader';
import ErrorBoundary from './Error/ErrorBoundary';

import { ThemeSwitcher, RoutesStyled} from "./ThemeSwitcher.styled.jsx";

const themes = {
  light: {
    colors: {
      globalBgColor: "grey",
      btnTextColor: "blue",
      btnBgColor: "#fff",
      btnBorderColor: "blue",
      hoverBtnColor: "red",
      hoverBtnBgColor: "green",
      containerBorderColor: "blue",
      containerBgColor: "#fff",
      counterColor: "blue",
      reverseBtnBorderColor: "blue",
      placeHolderText: "blue",
    },
    id: 'light'
  },

  dark: {
    colors: {
      globalBgColor: "white",
      btnTextColor: "#FFF",
      btnBgColor: "black",
      btnBorderColor: "#FFF",
      hoverBtnColor: "red",
      hoverBtnBgColor: "green",
      containerBorderColor: "red",
      containerBgColor: "black",
      counterColor: "#fff",
      reverseBtnBgColor: "#fff",
      reverseBtnBorderColor: "black",
      placeHolderText: "black",
    },
    id: 'dark'
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.globalBgColor};
  }
  ul {
    list-style: none;
  }
`;

class App extends Component {
  state = {
    theme: themes.light,
    oppositeTheme: themes.dark,
  };

  changeTheme = () => {
    if (this.state.theme === themes.dark) {
      this.setState({ theme: themes.light, oppositeTheme: themes.dark});
    }
    if (this.state.theme === themes.light) {
      this.setState({ theme: themes.dark, oppositeTheme: themes.light});
    }
  };

  render() {
    const { theme, oppositeTheme } = this.state;
    return (
      <div>
        <ErrorBoundary>
        {/*
          The next code allow to make an Routes - the same page with different sub-pages, instead of loading the new page it renders just necessary elements,
          read more in Layout
        */}
          <BrowserRouter> {/* BrowserRouter is a component that allows to use Routes as opening & closing component */}
            <ThemeSwitcher
              onClick={this.changeTheme}
              colors={theme.colors}
            >Switch on Theme: {oppositeTheme.id} </ThemeSwitcher>
            <Routes>
              <Route path='/react-homework-template' element={<Layout colors={theme.colors}/>}> {/* ==> first component Route - must be open & closed, the next one single */}
                <Route path='/react-homework-template/Clock' element={<Clock colors={theme.colors} />} /> {/* ==> attribute path is responsible for connecting Layout 'to' with Route */}
                <Route path='/react-homework-template/Player' element={<Video videos={videos} colors={theme.colors} />} /> {/* ==> attribute element is responsible for connecting creater component to Layout*/}
                <Route path='/react-homework-template/Reader' element={<Reader colors={theme.colors} publications={publications} />} />
                <Route path='/react-homework-template/Tabs' element={<Tabs items={items} colors={theme.colors} />} />
                <Route path='/react-homework-template/Todolist' element={<TodoList todos={tasks} theme={theme} />} />
              </Route>
            </Routes>
          </BrowserRouter>

        </ErrorBoundary>
      </div>
    );
  };
};


export default App;

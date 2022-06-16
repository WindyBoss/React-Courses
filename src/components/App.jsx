import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeSwitcher } from "./ThemeSwitcher.styled.jsx";

import CounterPage from '../pages/Counter';
import { SignupForm } from '../pages/SignupForm';
import ColorPicker from '../pages/ColorPicker';
import { Clock } from '../pages/Clock';
import { News } from '../pages/News';

import Appbar from './Appbar';

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
      placeHolderText: "#fff",
    },
    id: 'dark'
  }
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${props => props.theme.colors.globalBgColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

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

export default class App extends Component {
  state = {
    visible: false,

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

        <GlobalStyle theme={theme} />
        <ThemeSwitcher
          onClick={this.changeTheme}
          colors={theme.colors}
        >Switch on Theme: {oppositeTheme.id}
        </ThemeSwitcher>
        <BrowserRouter>
          <Routes>
            <Route path="/react-homework-template/" element={<Appbar colors={theme.colors}/>}>
              <Route path="/react-homework-template/Counter" element={<CounterPage colors={theme.colors} />} />
              <Route path="/react-homework-template/SignupForm" element={<SignupForm colors={theme.colors} />} />
              <Route path='/react-homework-template/ColorPicker' element={<ColorPicker colors={theme.colors} options={colorPickerOptions} />} />
              <Route path="/react-homework-template/Clock" element={<Clock colors={theme.colors} />} />
              <Route path="/react-homework-template/News" element={<News colors={theme.colors} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
};

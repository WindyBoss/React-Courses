import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Themes
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
    }
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
      reverseBtnBorderColor: "blue",

    }
  }
};


ReactDOM.render(
  <React.StrictMode>
    <App theme={ themes.dark}/>
  </React.StrictMode>,
  document.getElementById('root'),
);




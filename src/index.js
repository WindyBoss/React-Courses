import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

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
    },
    id: 'dark'
  }

};

ReactDOM.render(
  <React.StrictMode>
    <App theme={ themes.light}/>
  </React.StrictMode>,
  document.getElementById('root')
);



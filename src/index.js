import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import {Clock} from './components/Clock/Clock.styled';

console.log(Clock);


// ! https://reactjs.org/docs/react-api.html -> react API
// ! npx create-react-app my-app -> npm react Set Up

/*
* React - JS library, which works with DOM elements much faster than DOM, by replacing whole page rendering for component rendering, which is good for high interactive web applications
* React render the DOM elements inside client Browser by using client computer resources, than server and internet resources.
* React possess each own DOM Api instrunents, which can be read on 
*/


// This is the first way of React rendering

const elem1 = React.createElement('span', { children: 'Hi World',  } ); // 'Hi World => component children
const elem2 = React.createElement('span', { children: 'sup' } ); // { 'sup' => component children

const element = React.createElement('div', { 
  a: 5, 
  b: 10, 
  children: [elem1, ' ', elem2]
}); // {} - is an element props
console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));


// This is the se way of React rendering

const jsxElem1 = <span>Hi</span>
const jsxElem2 = <span>World</span>

const jsx = <div>
  {jsxElem1}
  {jsxElem2}
  {2 + 2} 

  qwerty

</div>;

/*
* React will additionally count {2 + 2}
* qwerty - will be read as string
*/

console.log(jsx)


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#root-1')
); // - if you name component from small letter, it will be recognized as tag, so name it from capital letter

/* the same as code on top
* ReactDOM.render(React.createElement(App), document.getElementById("root"));
*/


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <Clock>It is {new Date().toLocaleTimeString()}.</Clock>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);


/*
* nextJs -> helps to render Reach on server
*/
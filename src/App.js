import React from "react";
import { createGlobalStyle } from 'styled-components'
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import tasks from './data/notes.json';


// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.globalBgColor};
  }
`;

const colorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'brown', color: 'brown' },
  { label: 'navy', color: 'navy' },
  { label: 'aqua', color: 'aqua' },
];

const App = (props) => (
  <>
    <GlobalStyle theme={props.theme} />
    <Dropdown
      theme={props.theme}
      parts={[
        <Counter initialStep={5} initialValue={1} theme={props.theme} />,
        <ColorPicker options={colorPickerOptions} />
      ]}
    />
    <TodoList todos={tasks} theme={props.theme} />
  </>
);

export default App;

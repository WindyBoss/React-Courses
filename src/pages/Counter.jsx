import React, { Component, useState, useEffect, useReducer } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import { themeContext } from "context/authContext";
import { ButtonStyled } from "components/globalStyles";

import { CounterContainer, BtnContainer, TotalClickCounter, MainContainer } from '../components/Counter/Counter.styled';

class CounterClass extends Component {
  state = {
    counterA: 0,
    counterB: 0
  }

  handleCounterAIncrement = () => {
    this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
  };

  handleCounterBIncrement = () => {
    this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
  };

  componentDidMount() {
    const { counterA, counterB } = this.state;
    const totalClick = counterB + counterA;
    document.title = `Total click ${totalClick}`;
  };

  componentDidUpdate(prevProps, prevState) {
    const { counterA, counterB } = this.state;

    if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
      const totalClick = counterB + counterA;
      document.title = `Total click ${totalClick}`;
    }
  }

  render() {
    const { counterA, counterB } = this.state;
    const totalClick = counterB + counterA;
    return (
      <themeContext.Consumer>
      {({mainTheme}) => (  
        <BtnContainer colors={mainTheme.colors}>
          <ButtonStyled colors={mainTheme.colors} 
          endIcon={<ArrowUpwardIcon />} 
          type='button'
          onClick={this.handleCounterAIncrement}>
            Counter A {counterA} Clicks
          </ButtonStyled>
          <TotalClickCounter colors={mainTheme.colors}>{totalClick}</TotalClickCounter>
          <ButtonStyled colors={mainTheme.colors} 
          endIcon={<ArrowUpwardIcon />} 
          type='button'
          onClick={this.handleCounterBIncrement}>
            Counter B {counterB} Clicks
            </ButtonStyled>
        </BtnContainer>
      )}
      </themeContext.Consumer>      
    );
  };
};

function CounterHooks () {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  /*
  * useEffect - is a hook, which is used to perform side-effects in the component, instead of componentDidMount, componentWillUnmount, componentDidUpdate
  * you can have as namy use effects as you want
  ------------------------------------------------------------------------------------------------------*/

  useEffect(() => {
    document.title = `Total click ${counterB + counterA}`;
  }, [counterA, counterB]);

  /*
  * useEffect - here use effect is used as componentDidUpdate, when parameter in array (CounterA, CounterB) is changed
  */

  useEffect(() => {
    console.log(`Console log with Variables`);
  }, [counterA, counterB]);

  /*
  * useEffect - here use effect is used as componentDidMount, when the array is empty
  */

  useEffect(() => {
    console.log(`Console log with Empty Array`);
  }, []);


  /*
  * useEffect - here use effect is used as componentDidUpdate, react for any changes
  */
  useEffect(() => {
    console.log(`Console log without Array`);
  });

  /*
  * useEffect on condition (is better to use if inside of useEffect, when you want to fetch data from server inside of useEffect
  * on other render than the first one, or on some conditions)
  */
  useEffect(() => {
    if (counterA > 100) {
      fetch();
    }
  }, [counterA]);

  const totalClick = counterB + counterA;

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
      <BtnContainer colors={mainTheme.colors}>
          <ButtonStyled colors={mainTheme.colors} 
          endIcon={<ArrowUpwardIcon />} 
          type='button'
          onClick={handleCounterAIncrement}>
          Counter A {counterA} Clicks
          </ButtonStyled>
        <TotalClickCounter colors={mainTheme.colors}>{totalClick}</TotalClickCounter>
        <ButtonStyled colors={mainTheme.colors} 
        endIcon={<ArrowUpwardIcon />} 
        type='button'
        onClick={handleCounterBIncrement}>
          Counter B {counterB} Clicks
          </ButtonStyled>
      </BtnContainer>
      )}
    </themeContext.Consumer>      
  );
};

function countReducer (state, action) {
  switch (action.type) {
    case 'increment': // => in this switch is use string to show the operation type
      return {...state, count: state.count + action.payload}; // => before recalculation it is better to spread an old state

    case 'decrement':
      return {...state, count: state.count - action.payload}; // => before recalculation it is better to spread an old state

    default:
      throw new Error('Unknown action type ' + action.type);
    }
};

function CounterHooksReducer () {
  // const [state, dispatch] = useReducer(countReducer, {count: 0});

  /*
  * useReducer is used for more complicated state management. It has 3 parameters:
  1. setState function
  2. initial State [any type of data]
  3. initial State function, which create initial state, or hook will use initialState from 2 parameter
  */

  const [state, dispatch] = useReducer(countReducer, {count: 0}, init); // usually function to state update is called dispatch
  function init(initialState) {
    return {
      ...initialState, // => before recalculation it is better to spread an old state
      count: initialState.count + 100
    };
  }

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
      <BtnContainer colors={mainTheme.colors}>
          <ButtonStyled colors={mainTheme.colors} 
          endIcon={<ArrowUpwardIcon />} 
          type='button'
          onClick={() => dispatch({ type: 'increment', payload: 1})}>
          Increase by one
          </ButtonStyled>
        <TotalClickCounter colors={mainTheme.colors}>{state.count}</TotalClickCounter>
        <ButtonStyled colors={mainTheme.colors} 
        endIcon={<ArrowDownwardTwoToneIcon />} 
        type='button'
        onClick={() => dispatch({ type: 'decrement', payload: 1})}>
        Decrease by one
        </ButtonStyled>
      </BtnContainer>
      )}
    </themeContext.Consumer>      
  );
};

export default function CounterPage() {
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
    <MainContainer>
      <CounterContainer colors={mainTheme.colors}>
        <p>CounterClass</p>
        <CounterClass />
      </CounterContainer>
      <CounterContainer colors={mainTheme.colors}>
        <p>CounterHooks</p>
        <CounterHooks />
      </CounterContainer>
      <CounterContainer colors={mainTheme.colors}>
        <p>CounterHooks with Reducer</p>
        <CounterHooksReducer />
      </CounterContainer>
    </MainContainer>
    )}
    </themeContext.Consumer>       
  );
};

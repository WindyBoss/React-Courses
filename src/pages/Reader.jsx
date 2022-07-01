import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Controls } from '../components/Reader/Controls';
import { Progress } from '../components/Reader/Progress';
import { TextWrapper } from '../components/Reader/TextWrapper';

import { themeContext } from "context/authContext";

const LS_KEY = 'reader_item_index';
const LS_KEY_Hooks = 'reader_Hooks';

class ReaderClass extends Component {
  state = {
    index: localStorage.getItem(LS_KEY) ? Number(localStorage.getItem(LS_KEY)) : 0,
  };

  changeIndex = value => {
    const publicationNumber = this.props.publications.length;
    const { index } = this.state;

    switch (index + value) {
      case publicationNumber:
      this.setState({ index: 0 });
      break;
      case -1:
      this.setState({ index: publicationNumber - 1 });
      break;
      default:
      this.setState(state => ({ index: state.index + value }));
    };
  };

  componentDidUpdate(_, prevState) {
      if (prevState.index !== this.state.index) {
        localStorage.setItem(LS_KEY, Number(this.state.index));
      };
  };

  render() {
    const { publications } = this.props;
    const { index } = this.state;
    const currentPublication = publications[index];

    return (
      <themeContext.Consumer>
      {({mainTheme}) => (
        <ProgressContainer 
        onClick={this.changeIndex} 
        colors={mainTheme.colors} 
        currentIndex={index} 
        currentPublication={currentPublication} 
        totalPublications={publications.length}/>
      )}
      </themeContext.Consumer>          
    );
  };
};



const ReaderHooks = ({publications}) => {
  const [index, setIndex] = useState(() => {
    return localStorage.getItem(LS_KEY_Hooks) ? Number(localStorage.getItem(LS_KEY_Hooks)) : 0
  });

  const changeIndex = value => {
    const publicationNumber = publications.length;
    switch (index + value) {
      case publicationNumber:
        setIndex(0)
      break;
      case -1:
        setIndex(publicationNumber - 1)
      break;
      default:
        setIndex(prevState => prevState + value)
    };
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY_Hooks, Number(index)); 
  },[index])

  const currentPublication = publications[index];

  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
        <ProgressContainer 
        onClick={changeIndex} 
        colors={mainTheme.colors} 
        currentIndex={index} 
        currentPublication={currentPublication} 
        totalPublications={publications.length}/>
    )}
    </themeContext.Consumer>    
  );
};


export const Reader = ({publications, colors}) => {
  return (
    <div>
      <ReaderClass publications={publications}/>
      <ReaderHooks publications={publications}/>
    </div>
  )
}

Reader.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
};


const ProgressContainer = ({onClick, colors, currentIndex, currentPublication, totalPublications}) => {
  return (
    <>
    <div style={{width: '100%', marginTop: '30px', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Controls
          onClick={onClick}
          colors={colors}
        >
          <Progress
            colors={colors}
            current={currentIndex}
            total={totalPublications}
          />
        </Controls>
      </div>
      <TextWrapper
        publication={currentPublication}
        colors={colors}
      />
    </>  )
}
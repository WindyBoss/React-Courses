import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Controls } from './Controls';
import { Progress } from './Progress';
import { TextWrapper } from './TextWrapper';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    const publicationNumber = this.props.publications.length;
    const { index } = this.state;

    // use switch to check if the index is last or first
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
        localStorage.setItem(LS_KEY, Number(this.state.index)); // -> save index to localStorage
      };
  };

  componentDidMount() {
      const savedState = localStorage.getItem(LS_KEY); // -> take index from localStorage
      if (savedState) {
        this.setState({ index: Number(savedState) });
      };
  };

  render() {
    const { colors, publications } = this.props;
    const { index } = this.state;
    const currentPublication = publications[index];

    /*
    * It is good practice to split DOM tree to small elements, which can good managed
    */
    return (
      <>
        <div style={{position: 'absolute', left: '50%', transform: 'translate(-50%,0)'}}>
          <Controls
            onClick={this.changeIndex}
            colors={colors}
          // index={index}
          // publicationsLength={publications.length}
          >
            <Progress
              colors={colors}
              current={index}
              total={publications.length}
            />
          </Controls>
        </div>
        <TextWrapper
          publication={currentPublication}
          colors={colors}
        />
      </>
    );
  };
};


Reader.propTypes = {
  publications: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

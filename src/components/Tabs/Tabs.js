import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

import { Button, TextContainer, ButtonEl, TabContainer } from './Tabs.styled';

/*
* PureComponent - components which do not re-renders when the value of state and props has been updated with the same values.
*/

// Made with PureComponent
export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { items, colors } = this.props;
    const { activeTabIdx } = this.state;
    return (
      <TabContainer>
        <div>
          {
            items.map((item, idx) => (
              <ButtonEl key={idx}>
              <Button
                type='button'
                onClick={() => this.setActiveTabIdx(idx)}
                colors={colors}
              >
                {item.label}
              </Button>
              </ButtonEl>
            ))
          }
        </div>
        <TextContainer colors={colors}>
          <p style={{ marginRight: 'auto', marginLeft: 'auto'}}>{items[activeTabIdx].content}</p>
        </TextContainer>
      </TabContainer>
    );
  };
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

/*
* Made by traditional Component
export default class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  render() {
    const { items, colors } = this.props;
    const { activeTabIdx } = this.state;
    return (
      <>
        <div>
          {
            items.map((item, idx) => (
              <Button
                type='button'
                key={idx}
                onClick={() => this.setActiveTabIdx(idx)}
                colors={colors}
              >
                {item.label}
              </Button>
            ))
          }
          <TextContainer
            colors={colors}
          >
            {items[activeTabIdx].content}
          </TextContainer>
        </div>
      </>
    );
  };
};
*/

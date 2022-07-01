import React, { PureComponent, useState } from 'react';
import PropTypes from 'prop-types';

import { themeContext } from "context/authContext";

import { TextContainer, ButtonEl, TabContainer } from '../components/Tabs/Tabs.styled';

import { ButtonStyled } from "components/globalStyles";


class TabsClass extends PureComponent {
  state = {
    activeTabIdx: 0,
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { items } = this.props;
    const { activeTabIdx } = this.state;
    return (
        <themeContext.Consumer>
        {({mainTheme}) => (      
      <TabContainer>
        <div>
          {
            items.map((item, idx) => (
              <ButtonEl key={idx}>
              <ButtonStyled
                type='button'
                onClick={() => this.setActiveTabIdx(idx)}
                colors={mainTheme.colors}
              >
                {item.label}
              </ButtonStyled>
              </ButtonEl>
            ))
          }
        </div>
        <TextContainer colors={mainTheme.colors}>
          <p style={{ marginRight: 'auto', marginLeft: 'auto'}}>{items[activeTabIdx].content}</p>
        </TextContainer>
      </TabContainer>
        )}
        </themeContext.Consumer>      
    );
  };
};

function TabsHooks({items}) {
    const [activeTabIdx, setActiveTabIdx] = useState(0);
  
      return (
          <themeContext.Consumer>
          {({mainTheme}) => (      
        <TabContainer>
          <div>
            {
              items.map((item, idx) => (
                <ButtonEl key={idx}>
                <ButtonStyled
                  type='button'
                  onClick={() => setActiveTabIdx(idx)}
                  colors={mainTheme.colors}
                >
                  {item.label}
                </ButtonStyled>
                </ButtonEl>
              ))
            }
          </div>
          <TextContainer colors={mainTheme.colors}>
            <p style={{ marginRight: 'auto', marginLeft: 'auto'}}>{items[activeTabIdx].content}</p>
          </TextContainer>
        </TabContainer>
        )}
        </themeContext.Consumer>      
    );
};


export default function Tabs({items}) {
    return (
        <>
            <TabsClass items={items}/>
            <TabsHooks items={items}/>
        </>
    )
}

// Tabs.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired
//   })).isRequired,
//   colors: PropTypes.objectOf(PropTypes.string).isRequired,
// };

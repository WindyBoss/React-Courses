import React, { useContext, useState } from 'react';
import { themeContext } from 'context/authContext';
import {
  TextContainer,
  ButtonEl,
  TabContainer,
} from './styles/Tabs.styled';
import { ButtonStyled } from 'components/CommonComponents';
import PropTypes from 'prop-types';

function Tabs({ items }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const { mainTheme } = useContext(themeContext);

  return (
    <TabContainer>
      <div>
        {items.map((item, idx) => (
          <ButtonEl key={idx}>
            <ButtonStyled
              type="button"
              onClick={() => setActiveTabIdx(idx)}
              colors={mainTheme.colors}
            >
              {item.label}
            </ButtonStyled>
          </ButtonEl>
        ))}
      </div>
      <TextContainer colors={mainTheme.colors}>
        <p style={{ marginRight: 'auto', marginLeft: 'auto' }}>
          {items[activeTabIdx].content}
        </p>
      </TextContainer>
    </TabContainer>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tabs;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';

import { themeContext } from '../../../../context/authContext';
import { ButtonStyled } from 'components/CommonComponents';

import { NewsList, Link, LinkTitle, NewItem } from '../../styles/News.styled.jsx';

export function Resolved({ articles, shouldRenderLoadMoreButton, onClick }) {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      <NewsList colors={mainTheme.colors}>
        {articles.map(({ title, url }) => (
          <NewItem key={title}>
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <InsertLinkTwoToneIcon />
            </Link>
            <LinkTitle>{title}</LinkTitle>
          </NewItem>
        ))}
      </NewsList>
      {shouldRenderLoadMoreButton && (
        <ButtonStyled colors={mainTheme.colors} type="button" onClick={onClick}>
          Load more
        </ButtonStyled>
      )}
    </>
  );
}

Resolved.propTypes = {
  articles: PropTypes.array.isRequired,
  shouldRenderLoadMoreButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

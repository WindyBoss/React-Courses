import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

import { NewsList, Link, LinkButton, LinkTitle, NewItem } from './News.styled.jsx';

export function Resolved({articles, shouldRenderLoadMoreButton, onClick}) {
  return (
    <>
      <NewsList>
        {articles.map(({ title, url }) => (
          <NewItem key={title}>
            <LinkButton>
              <Link href={url} target="_blank" rel="noopener noreferrer">Link</Link>
            </LinkButton>
            <LinkTitle>{title}</LinkTitle>
          </NewItem>
        ))}
      </NewsList>
      {shouldRenderLoadMoreButton && (
        <Button style={{fontSize: '10px'}} variant="contained" type='button' onClick={onClick}>Load more</Button>
      )}
    </>
  );
};


Resolved.propTypes = {
  articles: PropTypes.array.isRequired,
  shouldRenderLoadMoreButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

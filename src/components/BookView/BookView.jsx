import React from 'react';
import { Container, InfoContainer, TextDescr } from './BookView.styled';

import { useReplaceImage } from 'Hooks/useReplaceImage';
import replaceImage from 'images/replace_book.jpeg';
import { useSelector } from 'react-redux';
import { authorsSelectors } from 'redux/authors/authorsSlice';

export default function BookDetailsView({ children, book }) {
  const { imgUrl, title, descr, genre, authorId } = book;

  // Custom Redux selector
  const authorName = useSelector(state =>
    authorsSelectors.getAuthorName(state, authorId)
  );

  return (
    <>
      {children}

      <Container>
        {useReplaceImage({
          src: imgUrl,
          fallback: replaceImage,
          props: { alt: title, width: 300 },
        })}
        <InfoContainer>
          <p>
            <TextDescr>Genre: </TextDescr>
            {genre}
          </p>
          <p>
            <TextDescr>Author: </TextDescr>
            {authorName}
          </p>
          <p>
            <TextDescr>Description: </TextDescr>
            {descr}
          </p>
        </InfoContainer>
      </Container>
    </>
  );
}

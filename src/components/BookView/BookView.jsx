import React from 'react';
import { Container, InfoContainer, TextDescr, Image } from './BookView.styled';

export default function BookDetailsView({ children, book }) {
  const { imgUrl, title, descr, genre, author } = book;

  return (
    <>
      {children}

      <Container>
        <Image src={imgUrl} alt={title} />
        <InfoContainer>
          <p>
            <TextDescr>Genre: </TextDescr>
            {genre}
          </p>
          <p>
            <TextDescr>Author: </TextDescr>
            {author.name}
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

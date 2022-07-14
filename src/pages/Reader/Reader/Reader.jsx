import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Controls } from '../common/components/Controls';
import { Progress } from '../common/components/Progress';
import { TextWrapper } from '../common/components/TextWrapper';

import { themeContext } from 'context/authContext';

const LS_KEY_Hooks = 'reader_Hooks';

export const Reader = ({ publications }) => {
  const { mainTheme } = useContext(themeContext);

  const [index, setIndex] = useState(() => {
    return localStorage.getItem(LS_KEY_Hooks)
      ? Number(localStorage.getItem(LS_KEY_Hooks))
      : 0;
  });

  const changeIndex = value => {
    const publicationNumber = publications.length;
    switch (index + value) {
      case publicationNumber:
        setIndex(0);
        break;
      case -1:
        setIndex(publicationNumber - 1);
        break;
      default:
        setIndex(prevState => prevState + value);
    }
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY_Hooks, Number(index));
  }, [index]);

  const currentPublication = publications[index];

  return (
    <ProgressContainer
      onClick={changeIndex}
      colors={mainTheme.colors}
      currentIndex={index}
      currentPublication={currentPublication}
      totalPublications={publications.length}
    />
  );
};

Reader.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ProgressContainer = ({
  onClick,
  colors,
  currentIndex,
  currentPublication,
  totalPublications,
}) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          marginTop: '30px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Controls onClick={onClick} colors={colors}>
          <Progress
            colors={colors}
            current={currentIndex}
            total={totalPublications}
          />
        </Controls>
      </div>
      <TextWrapper publication={currentPublication} colors={colors} />
    </>
  );
};

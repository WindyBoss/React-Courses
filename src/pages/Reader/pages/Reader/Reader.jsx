import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Controls } from '../../common/components/Controls';
import { Progress } from '../../common/components/Progress';
import { TextWrapper } from '../../common/components/TextWrapper';

import { themeContext } from 'context/authContext';
import { useSearchParams } from 'react-router-dom';

export const Reader = ({ publications }) => {
  const { mainTheme } = useContext(themeContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const publicationId = searchParams.get('id');
  const publicationIdParsed = parseInt(publicationId);

  const changeIndex = value => {
    const publicationNumber = publications.length;

    switch (publicationIdParsed + value) {
      case publicationNumber:
        setSearchParams({ id: 0 });
        break;
      case -1:
        setSearchParams({ id: publicationNumber - 1 });
        break;
      default:
        setSearchParams({ id: publicationIdParsed + value });
    }
  };

  useEffect(() => {
    isNaN(publicationIdParsed) ? setSearchParams({ id: 0 }) :
    setSearchParams({ id: publicationIdParsed });
  }, [publicationIdParsed, setSearchParams]);

  const currentPublication = !isNaN(publicationIdParsed)
    ? publications[publicationIdParsed]
    : publications[0];

  return (
    <ProgressContainer
      onClick={changeIndex}
      colors={mainTheme.colors}
      currentIndex={publicationIdParsed}
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

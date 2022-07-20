import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { StyledSelect } from '../../common/styles/Reader.styled';

import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
} from '@mui/material';

import {
  ButtonStyled,
  TextFieldStyled,
  ErrorContainer,
  LinearProgressStyled,
} from 'components/CommonComponents';

import { themeContext } from 'context/authContext';

import * as API from 'services/readerApi';
import { withApiState } from 'services/ApiState';
import { SortAndFilter, StyledNavLink } from '../../common/styles/Reader.styled';
import { useFetch } from 'hooks';

const ReaderHooks = ({ apiState, onClick, newState }) => {
  const { mainTheme } = useContext(themeContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const { state } = useFetch({
    fetchFunc: API.getPublications,
    apiState: apiState,
    firstRenderCheck: false,
    initialValue: [],
  });

  const [articles, setArticles] = useState(state);

  useEffect(() => {
    newState
      ? setArticles(state.filter(article => article.id !== newState.id))
      : setArticles(state);
  }, [newState, state]);

  useEffect(() => {
    const sort = searchParams.get('sort');
    const filter = searchParams.get('filter');

    filter
      ? setArticles(
          state.filter(
            article =>
              article.title.includes(filter) || article.text.includes(filter)
          )
        )
      : setArticles(state);

    switch (sort) {
      case 'alphabetDesc':
        setArticles(prevArt =>
          prevArt.sort((a, b) =>
            a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1
          )
        );
        break;

      case 'alphabetAsc':
        setArticles(prevArt =>
          prevArt.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1
          )
        );
        break;

      case 'LengthDesc':
        setArticles(prevArt =>
          prevArt.sort((a, b) => a.text.length - b.text.length)
        );
        break;

      case 'LengthAsc':
        setArticles(prevArt =>
          prevArt.sort((a, b) => b.text.length - a.text.length)
        );
        break;

      case null:
        setArticles(state.sort((a, b) => a.id - b.id));
        break;
      default:
        return;
    }
  }, [searchParams, state]);

  const sortPublication = e => {
    const currentParams = { filter: searchParams.get('filter') };
    const sort = e.target.value;

    currentParams.filter
      ? setSearchParams(
          sort === '' ? currentParams : { sort: sort, ...currentParams }
        )
      : setSearchParams(sort === '' ? '' : { sort: sort });
  };

  const filterPublication = e => {
    const currentParams = { sort: searchParams.get('sort') };

    const filter = e.target.value;

    currentParams.sort
      ? setSearchParams(
          filter === '' ? currentParams : { filter: filter, ...currentParams }
        )
      : setSearchParams(filter === '' ? '' : { filter: filter });
  };

  return (
    <>
      {apiState.isIdle() && <div>Publications did not come yet!</div>}

      {apiState.isPending() && (
        <LinearProgressStyled
          colors={mainTheme.colors}
          addFeat={{
            marginTop: '150px',
            maxWidth: '30%',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: ' 30px',
            borderRadius: '5px',
          }}
        />
      )}

      {apiState.isSuccess() && (
        <>
          <SortAndFilter>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}
            >
              <InputLabel
                color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}
                htmlFor="grouped-select"
                sx={{ color: mainTheme.colors.btnBgColor }}
              >
                Sort by
              </InputLabel>
              <StyledSelect
                defaultValue=""
                id="grouped-select"
                onChange={sortPublication}
                label="Sort by"
                colors={mainTheme.colors}
              >
                <MenuItem
                  style={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.reverseBtnBorderColor,
                  }}
                  value=""
                >
                  <em>None</em>
                </MenuItem>
                <ListSubheader
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.btnBgColor,
                  }}
                >
                  Alphabet
                </ListSubheader>
                <MenuItem
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.reverseBtnBorderColor,
                  }}
                  value="alphabetDesc"
                >
                  Descending
                </MenuItem>
                <MenuItem
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.reverseBtnBorderColor,
                  }}
                  value="alphabetAsc"
                >
                  Ascending
                </MenuItem>
                <ListSubheader
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.btnBgColor,
                  }}
                >
                  Publication Length
                </ListSubheader>
                <MenuItem
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.reverseBtnBorderColor,
                  }}
                  value="LengthDesc"
                >
                  Descending
                </MenuItem>
                <MenuItem
                  sx={{
                    color: mainTheme.colors.mainText,
                    backgroundColor: mainTheme.colors.reverseBtnBorderColor,
                  }}
                  value="LengthAsc"
                >
                  Ascending
                </MenuItem>
              </StyledSelect>
            </FormControl>
            <TextFieldStyled
              onChange={filterPublication}
              colors={mainTheme.colors}
              label="filter"
            />
          </SortAndFilter>

          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            {articles.map(item => (
              <li
                key={item.id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <StyledNavLink to={`${item.id}`}>
                  <ButtonStyled
                    addFeat={{ width: '150px' }}
                    size="small"
                    colors={mainTheme.colors}
                  >
                    {item.title}
                  </ButtonStyled>
                </StyledNavLink>
                {onClick && (
                  <ButtonStyled
                    onClick={() => onClick(item.id)}
                    colors={mainTheme.colors}
                  >
                    Delete
                  </ButtonStyled>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {apiState.isError() && <ErrorContainer text="Oops we failed sorry" />}
      <Outlet />
    </>
  );
};

export const ReaderHooksWrapper = withApiState(ReaderHooks);

export const Preview = ({ onClick, newState }) => {
  return (
    <div style={{ position: 'relative' }}>
      <ReaderHooksWrapper onClick={onClick} newState={newState} />
    </div>
  );
};

import React, { useContext } from 'react';

import { SortAndFilter, StyledSelect } from '../../common/styles/Reader.styled';
import { themeContext } from 'context/authContext';
import { TextFieldStyled } from 'components/CommonComponents';

import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
} from '@mui/material';

export const FormMenu = ({ sortPublication, filterPublication }) => {
  const { mainTheme } = useContext(themeContext);

  return (
    <>
      {/* mui library component */}
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
    </>
  );
};
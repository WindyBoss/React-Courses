import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Select } from '@mui/material';

export const TextContainer = styled.div`
  position: relative;
  padding: 20px;
  min-height: 300px;
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  border: ${props => `3px solid ${props.colors.containerBorderColor}`};
  max-width: 80%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const ProgressWrapper = styled.p`
  display: inline-block;
  border-radius: 50%;
  border: ${props => `3px solid ${props.colors.containerBorderColor}`};
  padding: 20px;
  background-color: ${props => props.colors.btnBgColor};
  color: ${props => props.colors.btnTextColor};
  margin-left: 20px;
  margin-right: 20px;
`;

export const FormContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  max-width: 500px;
  margin: 20px;
  border: ${props => `3px solid ${props.colors.containerBorderColor}`};
  color: ${props => props.colors.mainText};
`;

export const SortAndFilter = styled.div`
  display: inline-flex;
  margin-top: 20px;
  align-items: center;
`;

export const ReaderAppContainer = styled.div`
  margin-top: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  :not(:last-child) {
    margin-right: 20px;
  }
  text-decoration: none;
`;

export const StyledSelect = styled(Select)`
  border: ${props => `1px solid ${props.colors.btnBgColor}`};
  min-width: 200px;

  &.Mui-focused {
    border: none;
  }
`;

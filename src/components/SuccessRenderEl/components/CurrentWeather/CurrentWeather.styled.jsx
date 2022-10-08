import styled from 'styled-components';

export function getIconStyles(margin) {
  return { marginLeft: `${margin}px` };
}

export function getRowStyle(theme) {
  return {
    display: 'flex',
    minWidth: '100%',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.mainTextColor}`,
  };
}

export function getCellStyle(theme) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.mainTextColor,
    fontSize: '20px',
    border: 'none',
  };
}

export const Title = styled.h2`
  display: inline-flex;
  font-size: 30px;
  margin: 20px;
`;

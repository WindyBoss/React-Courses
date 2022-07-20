import { createGlobalStyle } from 'styled-components';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { styled as styles }  from '@mui/material/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';

import styled from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${props => props.theme.colors.globalBgColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export const btnStyles = (
  { btnTextColor, btnBgColor, btnBorderColor, hoverBtnColor, hoverBtnBgColor },
  hover
) => {
  return {
    color: !hover ? `${btnTextColor}` : `${hoverBtnColor}`,
    backgroundColor: !hover ? `${btnBgColor}` : `${hoverBtnBgColor}`,
    border: `1px solid ${btnBorderColor}`,
    transform: !hover ? 'scale(1)' : 'scale(1.1)',
  };
};

export function ButtonStyled({
  children,
  onClick,
  colors,
  endIcon,
  type,
  disabled,
  btnBgColor,
  addFeat,
}) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      style={
        btnBgColor
          ? {
              ...addFeat,
              ...btnStyles(colors, hover),
              color: btnBgColor,
              backgroundColor: '#b2b276',
            }
          : { ...addFeat, ...btnStyles(colors, hover) }
      }
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={onClick ?? onClick}
      variant="contained"
      type={type}
      endIcon={endIcon}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

ButtonStyled.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  endIcon: PropTypes.object,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  btnBgColor: PropTypes.string,
  addFeat: PropTypes.any,
};

export function TextFieldStyled({
  value,
  onChange,
  colors,
  label,
  variant,
  size,
  type,
  id,
  addFeat,
  name,
}) {
  return (
    <CssTextField
      type={type}
      value={value}
      label={label}
      variant={variant}
      size={size}
      id={id}
      onChange={onChange}
      colors={colors}
      name={name}
      style={{ marginRight: '20px', ...addFeat }}
    />
  );
}

TextFieldStyled.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

const CssTextField = styles(TextField)(({ colors, addFeat }) => ({
  '& label.Mui-focused': {
    color: colors.hoverBtnBgColor,
  },
  '& label': {
    color: colors.btnBgColor,
  },

  '& .MuiOutlinedInput-root': {
    color: colors.btnBgColor,
    ...addFeat,

    '& fieldset': {
      borderColor: colors.btnBgColor,
    },
    '&:hover fieldset': {
      borderColor: colors.hoverBtnBgColor,
    },
    '&.Mui-focused': {
      color: colors.hoverBtnBgColor,

      '& fieldset': {
        borderColor: colors.hoverBtnBgColor,
        ...addFeat,
      },
    },
  },
}));

const CssProgressBar = styles(LinearProgress)(({ colors }) => {
  return {
    '& .MuiLinearProgress-bar': {
      backgroundColor: colors.btnBgColor,
    },
  };
});

export const LinearProgressStyled = ({ colors, addFeat }) => {
  return (
    <CssProgressBar
      colors={colors}
      style={{
        backgroundColor: colors.hoverBtnBgColor,
        ...addFeat,
      }}
    />
  );
};

const ErrorContainerStyled = {
  marginRight: 'auto',
  marginLeft: 'auto',
  fontSize: '24px',
  fontWeight: 'bold',
};

export const ErrorContainer = ({ text }) => {
  return (
    <div style={ErrorContainerStyled}>
      <h2>{text}</h2>
    </div>
  );
};




export const HomepageContainer = styled.div`
padding: 8px;
margin-top: 20px;
border-radius: 8px;
color: #fff;
font-size: 40px;
font-weight: 500;
text-align: center;


color: ${props => props.colors.mainText};
background-image: ${props => `repeating-linear-gradient(
    -45deg,
    ${props.colors.btnBgColor},
    ${props.colors.btnBgColor} 15px,
    ${props.colors.containerBgColor} 15px,
    ${props.colors.containerBgColor} 30px
  )`};
`;
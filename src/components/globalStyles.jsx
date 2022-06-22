import { createGlobalStyle } from 'styled-components';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

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

export const btnStyles = ({btnTextColor, btnBgColor, btnBorderColor, hoverBtnColor, hoverBtnBgColor}, hover) => {
    return (
      {
        color: !hover ? `${btnTextColor}` : `${hoverBtnColor}`, 
        backgroundColor: !hover ? `${btnBgColor}` : `${hoverBtnBgColor}`,
        border: `1px solid ${btnBorderColor}`,
        transform: !hover ? 'scale(1)' : 'scale(1.1)'
      }
    );
};

export function ButtonStyled ({
  children, 
  onClick, 
  colors, 
  endIcon, 
  type, 
  disabled, 
  btnBgColor, 
  addFeat
}) {
   const [hover, setHover] = useState(false);  
   return (
    <Button
      style={ btnBgColor ? {...addFeat, ...btnStyles(colors, hover), color: btnBgColor, backgroundColor: '#b2b276'} : {...addFeat, ...btnStyles(colors, hover)}}
      onPointerOver={()=> setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={onClick}
      variant="contained" 
      type={type}
      endIcon={endIcon}
      disabled={disabled}
    >
      {children}
    </Button>
  )
};

export function TextFieldStyled ({ 
  value, 
  onChange, 
  colors, 
  label, 
  variant, 
  size, 
  type, 
  id, 
  hoverColor,
  color,
}) {
  const [hover, setHover] = useState(false);  
  return (
    <CssTextField
      onFocus={()=> setHover(true)}
      onBlur={() => setHover(false)}
      type={type}
      value={value}
      label={label}
      variant={variant}
      size={size}
      id={id}
      onChange={onChange}
      color={hover ? color : hoverColor}
      colors={colors}
      style={{marginRight: '20px'}}
    />
  )
}

const CssTextField = styled(TextField)(({ colors }) => ({ 
  '& label.Mui-focused': {
    color: colors.hoverBtnBgColor,
  },
  '& label': {
    color: colors.btnBgColor,
  },

  '& .MuiOutlinedInput-root': {
    color: colors.btnBgColor,

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
    },
  }
  },
}));
import { TextField } from '@mui/material';

import { styled as styles } from '@mui/material/styles';

export default function TextFieldStyled({
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

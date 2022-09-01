import { useDispatch, useSelector } from 'react-redux';
import { showTheme } from 'redux/theme/themeSlice';
import { setFilter } from 'redux/todo';
import TextFieldStyled from 'components/TextFieldStyled';

export default function TodoFilter() {
  const { theme } = useSelector(showTheme);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <TextFieldStyled
        onChange={handleChange}
        label="Filter"
        variant="outlined"
        colors={theme.colors}
      />
    </>
  );
}

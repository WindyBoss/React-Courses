import PropTypes from 'prop-types';

import { FilterContainer } from "./Styles/TodoList.styled";
import { TextFieldStyled } from "../globalStyles";

const TodoFilter = ({ onChange, colors }) => {
  return (
    <FilterContainer colors={colors}>
      <TextFieldStyled type="text"
        onChange={onChange}
        colors={colors}
        label='Task Filter'
      />
    </FilterContainer>
  );
};


export default TodoFilter;

TodoFilter.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
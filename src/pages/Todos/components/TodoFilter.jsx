import PropTypes from 'prop-types';

import { FilterContainer } from "../styles/TodoList.styled";
import { TextFieldStyled } from "components/CommonComponents";

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

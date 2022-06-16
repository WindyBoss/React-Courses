import PropTypes from 'prop-types';

import { FilterContainer, FilterText, InputFilter } from "./Styles/TodoFilter.styled";

const TodoFilter = ({ onChange, colors }) => {
  return (
    <FilterContainer colors={colors}>
      <FilterText>Task Filter:</FilterText>
      <InputFilter type="text"
        onChange={onChange}
        placeholder="add filter"
        colors={colors}
      />
    </FilterContainer>
  );
};


export default TodoFilter;

TodoFilter.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

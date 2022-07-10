import { FilterContainer, FilterText } from "./Styles/TodoFilter.styled";

const TodoFilter = ({ value, onChange, colors }) => {
    return (
        <FilterContainer colors={colors}>
            <FilterText>Task Filter:</FilterText>
            <input type="text"
                value={value}
                //  value={"Text"} => put word "Text" unchangeable inside input
                onChange={onChange}
                placeholder="add filter"
            />
        </FilterContainer>
    );
};


export default TodoFilter;

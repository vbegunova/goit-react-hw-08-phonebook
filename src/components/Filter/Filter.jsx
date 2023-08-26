import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Filter.styled';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Container>
      <label htmlFor="filter-input">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        id="filter-input"
      />
    </Container>
  );
};

export default Filter;

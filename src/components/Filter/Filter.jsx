import { InputSearch } from 'components/SearchForm/SearchForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <InputSearch
      onChange={handleInput}
      placeholder="What do you want to write?"
      name="search"
      required
      value={filter}
      autoFocus
      style={{ marginBottom: '50px' }}
    />
  );
};

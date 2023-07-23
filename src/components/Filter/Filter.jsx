import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { setFilter, getFilter } from '../../redux/filterSlice';


export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
   
    dispatch(setFilter(e.target.value))
  }
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type='text'
          value={filter}
          id='search'
          placeholder='Search something..'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

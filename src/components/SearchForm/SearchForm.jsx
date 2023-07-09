import React, { Component, useState } from 'react';
import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoSlice';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // const todo = {
    //   id: nanoid(),
    //   text: query,
    // };

    dispatch(addTodo(query));

    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};

// export class SearchForm1 extends Component {
//   state = {
//     query: '',
//   };

//   handleInput = e => {
//     this.setState({
//       query: e.currentTarget.value,
//     });
//   };

//   handleSubmit = e => {
//     const { query } = this.state;

//     e.preventDefault();

//     this.props.onSubmit(query);

//     this.setState({
//       query: '',
//     });
//   };
//   render() {
//     const { query } = this.state;

//     return (
//       <SearchFormStyled onSubmit={this.handleSubmit}>
//         <FormBtn type="submit">
//           <FiSearch size="16px" />
//         </FormBtn>
//         <InputSearch
//           onChange={this.handleInput}
//           placeholder="What do you want to write?"
//           name="search"
//           required
//           value={query}
//           autoFocus
//         />
//       </SearchFormStyled>
//     );
//   }
// }

import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  handleInputChange = e => {
    const prevValue = this.state.query;
    const nextValue = e.target.value;

    if (prevValue !== nextValue) {
      this.setState({ query: nextValue });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={this.handleFormSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={query}
          onChange={this.handleInputChange}
        />
      </SearchFormStyled>
    );
  }
}

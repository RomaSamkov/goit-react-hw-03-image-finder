import { Component } from 'react';
import {
  Button,
  ButtonLabel,
  SearchBar,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  render() {
    return (
      <SearchBar>
        <SearchForm>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;

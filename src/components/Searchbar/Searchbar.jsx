import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Button,
  ButtonLabel,
  SearchBar,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }
    this.props.onSubmit(this.state.query);
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <SearchFormInput
            onInput={this.handleInputChange}
            value={this.state.query}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonForm, ButtonLabel, Form, Input } from './SearchForm.styled';

class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <ButtonForm type="button" onSubmit={this.handleSubmit}>
          <ButtonLabel>Search</ButtonLabel>
        </ButtonForm>

        <Input
          type="text"
          name="query"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    );
  }
}

export default SearchForm;

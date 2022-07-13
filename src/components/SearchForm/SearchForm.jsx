import React, { Component } from 'react';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Записывает в состояние class SearchForm текст введенный в инпут
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  // Записывает в пропс onSubmit текущее состояние
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.searchForm} onSubmit={this.handleSubmit}>
        <button
          onSubmit={this.handleSubmit}
          type="button"
          className={s.searchForm__button}
        >
          <span className={s.ComponentsearchForm__button__labe}>Search</span>
        </button>
        <input
          type="text"
          name="qwery"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          className={s.searchForm__input}
          autoComplete="off"
          autoFocus
        ></input>
      </form>
    );
  }
}

export default SearchForm;

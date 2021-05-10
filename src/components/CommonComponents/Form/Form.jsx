//модули
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//стили
import styles from './Form.module.css';

export default class Form extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    inputValue: '',
  };

  inputHandler = event => {
    const { currentTarget } = event;
    this.setState({ inputValue: currentTarget.value });
  };

  submitForm = event => {
    event.preventDefault();

    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    onSubmit(inputValue);

    this.resetState();
  };

  resetState = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.setState;
    return (
      <form className={styles.SearchForm} onSubmit={this.submitForm}>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={this.inputHandler}
        />
        <button type="submit" className={styles.SearchFormButton}>
          Search
        </button>
      </form>
    );
  }
}

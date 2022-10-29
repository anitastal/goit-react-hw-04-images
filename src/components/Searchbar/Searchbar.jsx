import { toast } from 'react-toastify';
import css from './Search.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchImageByName, setSearchImageByName] = useState('');

  const handleChangeName = e => {
    setSearchImageByName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImageByName.trim() === '') {
      toast.error('Please enter a valid query');

      return;
    }
    onSubmit(searchImageByName);
    setSearchImageByName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button className={css.SearchForm_button} type="submit">
          <span>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          name="imageName"
          value={searchImageByName}
          onChange={handleChangeName}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

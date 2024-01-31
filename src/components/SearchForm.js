import React, { useEffect } from 'react';
import { AppContext, useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // Creating a reference to the search input field
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  // set focus on input field
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

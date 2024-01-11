import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id="search">
      <form>
        <input className='searchBar' type="text"  placeholder={`Search events`} value={searchTerm} onChange={handleChange} />
        
        <Link to={`/search/events/${searchTerm}`}>
            <button type="submit" className='button searchButton'>Search</button>
        </Link>
      </form>
    </div>
    
  );
};

export default Search;
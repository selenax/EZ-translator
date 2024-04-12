import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [text, setText] = useState('');

  // pass back input value to parent by calling onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  // capture input value and assign to state
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

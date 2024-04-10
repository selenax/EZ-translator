import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

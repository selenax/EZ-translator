import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchAPI from "./api";

function App() {
  const [images, setImages] = useState([]);

  // received text from child component in input field
  // pass to search api function
  const handleSearch = (text) => {
    searchAPI(text);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchAPI from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  // received text from child component in input field
  // pass to search api function, save json in result
  const handleSearch = async (text) => {
    const result = await searchAPI(text);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

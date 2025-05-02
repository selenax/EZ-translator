import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchAPI from './api';
import ImageList from './components/ImageList';

function App() {
	const [images, setImages] = useState([]);
	const [count, setCount] = useState(0);

	// received text from child component in input field
	// pass to search api function, save json in result
	const handleSearch = async (text) => {
		const result = await searchAPI(text);
		setImages(result);
	};

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<SearchBar onSubmit={handleSearch} />
			<ImageList images={images} />
			<button onClick={handleClick}>add images</button>
			<div>Numbers of images: {count}</div>
		</div>
	);
}

export default App;

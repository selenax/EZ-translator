import { useState } from 'react';
import SearchBox from './components/SearchBox'

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <SearchBox />
    </div>


  )
}


export default App;
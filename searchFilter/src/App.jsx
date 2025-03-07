import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <SearchFilter />
    </>
  )
}

function SearchFilter() {

  const [items, setItems] = useState([
    'Mercedes',
    'Thar',
    'BMW',
    'Audi',
    'Defender',
  ]);

  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChnage = (event) => {
    setSearchInput(event.target.value);
    setSearchQuery(event.target.value);
  }

  const handleSearch = ()=>{
    setSearchQuery(searchInput);
    setSearchInput('');
  }

  const filteredItem = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Find your products</h1>
      <br />

      <input style={{ padding: '12px', color: 'white' }}
        type="text"
        placeholder='find your product'
        value={searchInput}
        onChange={handleInputChnage} />
      <button type="button" onClick={handleSearch}>search</button>
      <ul>
        {filteredItem.length > 0 ?
          filteredItem.map((item, index) => (
            <li style={{listStyle:'none'}} key={index}>{item}</li>
          )):
          <p>No results found</p>
        }
      </ul>
    </div>
  )
}
export default App

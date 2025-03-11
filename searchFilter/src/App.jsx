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

  //manually add the products
  const [items, setItems] = useState([
    'Mercedes',
    'Thar',
    'BMW',
    'Audi',
    'Defender',
  ]);

  const [searchInput, setSearchInput] = useState(''); // to store live input value while typing
  const [searchQuery, setSearchQuery] = useState(''); // to store the final input 

  const handleInputChnage = (event) => {
    setSearchInput(event.target.value); // gets the latest value from input box
    setSearchQuery(event.target.value); // stores the value while typing as well as when click on the search button
  }

  // when user click on the search button
  const handleSearch = ()=>{
    setSearchQuery(searchInput); // takes the current value of searchInput and stores in searchQuery
    setSearchInput(''); // clears the input fiels after clicking on the search button
  }

  const handleReset = ()=>{
    setSearchInput('');
    setSearchQuery('');
  }

  // to filter the search query
  const filteredItem = items.filter((item) =>
    // to check if item contains the search query 
    item.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div>
      <h1>Find your products</h1>
      <br />

      <input style={{ padding: '12px', color: 'white', borderRadius: '5px'}}
        type="text"
        placeholder='find your product'
        value={searchInput}
        onChange={handleInputChnage} />

         {/* runs handleSearch when we click on the button */}
      <button type="button" onClick={handleSearch}>search</button>
      <button type="button" onClick={handleReset}>reset</button>
      <ul>
      {/* loops through the items and creates the li */}
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

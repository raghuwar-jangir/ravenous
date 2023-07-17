import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from 'react';



function App() {
  const [arr, setArr] = useState([]);
  return (
    <div className="App">
      <h1>Local Eats</h1>
      <SearchBar setArr={setArr} />
      <BusinessList businesses={arr} />
    </div>
  );
}

export { App };

import './App.scss';
import beers from "./data/beers.js";
import Nav from "./containers/Nav/Nav.jsx";
import CardList from "./containers/CardList/CardList.jsx";
import { useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const filteredBeer = beers.filter(beer => beer.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <div className="App">
      <Nav searchValue={searchValue} handleInput={handleInput}/>
      <CardList beersArr={filteredBeer}/>
    </div>
  );
}

export default App;

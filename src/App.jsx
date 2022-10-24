import './App.scss';
import Nav from "./containers/Nav/Nav.jsx";
import CardList from "./containers/CardList/CardList.jsx";
import { useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [beers, setBeers] = useState([]);

  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }
  
  //This need attention

  getBeers();

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      console.log("Hello")
    } else {
      console.log("checkbox is not checked...");
    }
  }

  const filteredBeer = beers.filter(beer => beer.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <div className="App">
      <Nav 
        searchValue={searchValue} 
        handleInput={handleInput} 
        handleCheckBox={handleCheckBox}
      />

        <CardList 
          beersArr={filteredBeer} 
        />
    </div>
  );
}

export default App;

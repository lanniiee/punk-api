import './App.scss';
import Nav from "./containers/Nav/Nav.jsx";
import CardList from "./containers/CardList/CardList.jsx";
import { useEffect, useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [beers, setBeers] = useState([]);

  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const url = `https://api.punkapi.com/v2/beers`;

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }
  
  useEffect(() => {
    getBeers(url);
  }, []);


  const handleCheckBox = (event) => {
    if (event.target.checked) {
      if (event.target.value === "abv") {
        return setBeers(beers.filter(beer => beer.abv > 6))
      } else if (event.target.value === "classic") {
        setBeers(beers.filter(beer => beer.first_brewed.slice(3) < 2010))
      } else if (event.target.value === "ph") {
        setBeers(beers.filter(beer => beer.ph < 4)); 
      }
    } else {
      return getBeers();
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

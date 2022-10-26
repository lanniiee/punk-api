import './App.scss';
import Nav from "./containers/Nav/Nav.jsx";
import CardList from "./containers/CardList/CardList.jsx";
import { useEffect, useState } from 'react';


const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [beers, setBeers] = useState([]);
  const [abvBeers, setAbvBeers] = useState(false);
  const [classicBeers, setClassicBeers] = useState(false);
  const [phBeers, setPhBeers] = useState(false);
  const [beersArr, setBeersArr] = useState([]);
  
  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    setBeersArr(data);
  }
  
  useEffect(() => {
    getBeers();
  }, []);

  const handleABV = () => {
    setAbvBeers(!abvBeers)
  } 

  const handleClassic = () => {
    setClassicBeers(!classicBeers)
  } 

  const handlePh = () => {
    setPhBeers(!phBeers)
  } 

  useEffect(() => {
    if (abvBeers) {
      setBeers(beersArr.filter(beer => beer.abv > 6))
    } 
    if (classicBeers) {
      setBeers(beersArr.filter(beer => beer.first_brewed.slice(3) < 2010))
    }
    if (phBeers) {
      setBeers(beersArr.filter(beer => beer.ph < 4))
    }
  }, [abvBeers, classicBeers, phBeers, beersArr])


  const filteredBeer = beers.filter(beer => beer.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <div className="App">
      <Nav 
        searchValue={searchValue} 
        handleInput={handleInput} 
        handleABV={handleABV}
        handleClassic={handleClassic}
        handlePh={handlePh}
      />

        <CardList 
          beersArr={filteredBeer} 
        />
    </div>
  );
}

export default App;

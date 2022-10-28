import './App.scss';
import Nav from "./containers/Nav/Nav.jsx";
import CardList from "./containers/CardList/CardList.jsx";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardInfo from './components/CardInfo/CardInfo.jsx';

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
    const url = `https://api.punkapi.com/v2/beers?per_page=80`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    setBeersArr(data);
    console.log(res['status'])

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
    let checkedBeer = beersArr;
    if (abvBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.abv > 6)
    }
    if (classicBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.first_brewed.slice(3) < 2010)
    } 
    if (phBeers) {
      checkedBeer = checkedBeer.filter(beer => beer.ph < 4)
    }
    setBeers(checkedBeer)
  }, [abvBeers, classicBeers, phBeers, beersArr])


  const filteredBeer = beers.filter(beer => beer.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (

    <div className="App">
      <Router>
        <Nav 
          searchValue={searchValue} 
          handleInput={handleInput} 
          handleABV={handleABV}
          handleClassic={handleClassic}
          handlePh={handlePh}
        />

        <Routes>
          <Route
            path='/punk-api'
            element={
              <CardList 
                beersArr={filteredBeer} />
            }
          />

        <Route
            path='/punk-api/beer/:beerId'
            element={
              <CardInfo
                beersArr={beersArr} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import CheckBox from "../../components/CheckBox/Checkbox";
import logo from "../../assets/images/nw6qLM01.svg";


const Nav = (props) => {
    const {searchValue, handleInput, handleABV, handleClassic, handlePh} = props;
    return (
        <div className="nav">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <SearchBox searchValue={searchValue} handleInput={handleInput}/>
            <h1>Filter By Option</h1>
            <CheckBox handleABV={handleABV} handleClassic={handleClassic} handlePh={handlePh}/>
        </div>
        
        
    )
}

export default Nav;
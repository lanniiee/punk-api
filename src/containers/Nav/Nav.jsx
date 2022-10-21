import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import CheckBox from "../../components/CheckBox/Checkbox";


const Nav = (props) => {
    const {searchValue, handleInput} = props;
    return (
        <div className="nav">
            <SearchBox searchValue={searchValue} handleInput={handleInput}/>
            <h1>Filter By Option</h1>
            <CheckBox />
        </div>
        
        
    )
}

export default Nav;
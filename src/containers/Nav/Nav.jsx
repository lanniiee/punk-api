import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import CheckBox from "../../components/CheckBox/Checkbox";


const Nav = (props) => {
    const {searchValue, handleInput, handleCheckBox} = props;
    return (
        <div className="nav">
            <SearchBox searchValue={searchValue} handleInput={handleInput}/>
            <h1>Filter By Option</h1>
            <CheckBox handleCheckBox={handleCheckBox}/>
        </div>
        
        
    )
}

export default Nav;
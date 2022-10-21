import "./Nav.scss";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";


const Nav = (props) => {
    const {searchValue, handleInput} = props;
    return (
        <div className="nav-searchbox">
            <SearchBox searchValue={searchValue} handleInput={handleInput}/>
        </div>
        
        
    )
}

export default Nav;
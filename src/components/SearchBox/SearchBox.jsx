import "./SearchBox.scss";

const SearchBox = ({searchValue, handleInput}) => {

    return (
        <form action="" className="searchbox">
            <input 
                className="searchbox__input"
                placeholder="Search By Name.."
                type="text"
                onInput={handleInput}
                value={searchValue} />
        </form>
    )
}

export default SearchBox;
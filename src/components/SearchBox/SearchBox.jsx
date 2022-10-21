import "./SearchBox.scss";

const SearchBox = (props) => {
    const {searchValue, handleInput} = props
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
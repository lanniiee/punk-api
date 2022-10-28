import "./CheckBox.scss";

const CheckBox = ({handleABV, handleClassic, handlePh}) => {
    const highAbv = "High ABV (> 6.0%)";
    const classic = "Classic Range";
    const acidity = "Acidic (pH < 4)";

    return (
        <div className="checkbox">
            <div className="checkbox__option">
                <label htmlFor="checkbox__abv" className="checkbox__label">{highAbv}</label>
                <input 
                    className="checkbox__input" 
                    value="abv" 
                    type="checkbox"
                    id="checkbox__abv" 
                    onChange={handleABV}/>
            </div>
            <div className="checkbox__option">
                <label htmlFor="checkbox__classic" className="checkbox__label">{classic}</label>
                <input 
                    className="checkbox__input" 
                    value="classic" 
                    type="checkbox" 
                    id="checkbox__classic"
                    onChange={handleClassic}
                />
            </div>
            <div className="checkbox__option">
                <label htmlFor="checkbox__ph" className="checkbox__label">{acidity}</label>
                <input 
                    className="checkbox__input" 
                    value="ph" 
                    type="checkbox"
                    id="checkbox__ph"
                    onChange={handlePh} 
                />
            </div>
        </div>
    )
}

export default CheckBox;
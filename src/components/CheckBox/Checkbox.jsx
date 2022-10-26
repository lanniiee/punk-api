import "./CheckBox.scss";

const CheckBox = ({handleABV, handleClassic, handlePh}) => {
    const highAbv = "High ABV (> 6.0%)";
    const classic = "Classic Range";
    const acidity = "Acidic (pH < 4)";

    return (
        <div className="checkbox">
            <div className="checkbox__option">
                <label className="checkbox__label">{highAbv}</label>
                <input 
                    className="checkbox__input" 
                    value="abv" 
                    type="checkbox" 
                    onChange={handleABV}/>
            </div>
            <div className="checkbox__option">
                <label className="checkbox__label">{classic}</label>
                <input 
                    className="checkbox__input" 
                    value="classic" 
                    type="checkbox" 
                    onChange={handleClassic}
                />
            </div>
            <div className="checkbox__option">
                <label className="checkbox__label">{acidity}</label>
                <input 
                    className="checkbox__input" 
                    value="ph" 
                    type="checkbox"
                    onChange={handlePh} 
                />
            </div>
        </div>
    )
}

export default CheckBox;
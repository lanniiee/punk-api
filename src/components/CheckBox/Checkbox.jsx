import "./CheckBox.scss";

const CheckBox = () => {
    const highAbv = "High ABV (> 6.0%)";
    const classic = "Classic Range";
    const acidity = "Acidic (pH < 4)";

    return (
        <div className="checkbox">
            <div className="checkbox__option">
                <label className="checkbox__label">{highAbv}</label>
                <input className="checkbox__input" type="checkbox" />
            </div>
            <div className="checkbox__option">
                <label className="checkbox__label">{classic}</label>
                <input className="checkbox__input" type="checkbox" />
            </div>
            <div className="checkbox__option">
                <label className="checkbox__label">{acidity}</label>
                <input className="checkbox__input" type="checkbox" />
            </div>
        </div>
    )
}

export default CheckBox;
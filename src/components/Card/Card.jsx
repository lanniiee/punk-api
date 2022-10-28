import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {name, imageUrl, beerId} = props;
    return (
        <div className="card">
            <h3 className="card__name" id={name}>{name}</h3>
            <img src={imageUrl} alt="beer image" className="beer-image"/>
            <Link to={`/punk-api/beer/${beerId}`} className="card__more-info-link">
                <h5>More Info</h5>
            </Link>
        </div>
    )
}

export default Card;
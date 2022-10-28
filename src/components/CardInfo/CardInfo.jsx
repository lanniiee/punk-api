import { useParams } from "react-router-dom";
import "./CardInfo.scss";

const CardInfo = ({beersArr}) => {
    const {beerId} = useParams()
    const selectedBeer = beersArr.filter(beer => beer.id === parseFloat(beerId));

    const {
        name,
        first_brewed, 
        abv,
        ph, 
        image_url,
        description,
        food_pairing,
        tagline
    } = selectedBeer[0];

    return (
        <div className="beer-info">
            <h2 className="beer-info__heading" id={name}>{name}</h2>
            <img 
                src={image_url} 
                alt={name} 
                className="beer-info__image"
            />
            <div className="beer-info__content">
                <h3>First brewed: {first_brewed}</h3>
                <h3>Alcohol Level: {abv}%</h3>
                <h3>Acidity Level: {ph}</h3>
                <h3 className="beer-info__tag">Tag Line: {tagline}</h3>
                <h3 className="beer-info__heading">Description:</h3>
                <p className="beer-info__description">{description}</p>
                <h3 className="beer-info__heading">Food Pairing:</h3>
                <p className="beer-info__description">{food_pairing.join(", ")}.</p>
            </div>

        </div>
    )
}

export default CardInfo;
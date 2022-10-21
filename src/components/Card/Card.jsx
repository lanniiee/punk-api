import "./Card.scss";

const Card = (props) => {
    const {name, firstbrewed, description, img, abv} = props;
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={img} alt="beer image" />
            <h4>First Brewed: {firstbrewed}</h4>
            <h4>Alcohol Level: {abv}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Card;
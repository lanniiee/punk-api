import "./CardList.scss";
import Card from "../../components/Card/Card.jsx";

const CardList = ({beersArr}) => {

    const beersDisplay = beersArr.map(beer => 
        (
            <Card 
                key={beer.id}
                name={beer.name}
                firstbrewed={beer.first_brewed}
                description={beer.description}
                imageUrl={beer.image_url}
                abv={beer.abv}
                beerId={beer.id}
            />
        )
    )
    return (
        <div className="cards-container">
            {beersDisplay}
        </div>
    )
}

export default CardList;
import "./CardList.scss";
import Card from "../../components/Card/Card.jsx";
import beers from "../../data/beers";

const CardList = (props) => {
    const {beersArr} = props;

    const beersDisplay = beersArr.map(beer => 
        (
                <Card 
                    key={beer.id}
                    name={beer.name}
                    firstbrewed={beer.first_brewed}
                    description={beer.description}
                    img={beer.image_url}
                    abv={beer.abv}
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
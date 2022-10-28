import {Link} from "react-router-dom";
import { render, screen } from '@testing-library/react';
import CardInfo from "./CardInfo"

it('should show image on load', () => {
    render(<img 
        src="image" 
        className="beer-info__image"
    />);

    const beerImage = screen.getByRole("img");
    expect(beerImage).toHaveAttribute("src", "image");
})
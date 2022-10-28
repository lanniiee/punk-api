import {BrowserRouter} from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Card from './Card';

it('should show image on load', () => {
    render(<BrowserRouter><Card name="name" imageUrl="image" beerId="id"/></BrowserRouter>);

    const beerName = screen.getByText("name");

    expect(beerName).toBeInTheDocument();
})
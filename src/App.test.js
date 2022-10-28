import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


it('should render the input', () => {
  //Arrange
  render(<App />);

  //Act
  const searchInput = screen.getByRole('textbox')

  userEvent.type(searchInput, "buzz");

  //Assert
  expect(searchInput).toBeInTheDocument()
})




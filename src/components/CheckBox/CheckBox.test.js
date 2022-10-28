import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from "./Checkbox"
import {userEvent} from "@testing-library/user-event";


it('checkbox should be checked when clicked', () => {
  //Arrange
  render(<CheckBox />);

  //Act
  const classic = screen.getByLabelText("Classic Range")
  const abv = screen.getByLabelText("High ABV (> 6.0%)")
  const ph = screen.getByLabelText("Acidic (pH < 4)")
  fireEvent.click(classic, {target: {value: "classic"}})
  fireEvent.click(abv, {target: {value: "abv"}})
  fireEvent.click(ph, {target: {value: "ph"}})

  //Assert
  expect(classic).toBeTruthy();
  expect(abv).toBeTruthy();
  expect(ph).toBeTruthy();
})




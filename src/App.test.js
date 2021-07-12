import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  //button turns blue when clicked
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //expect the text change to 'change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

});


test('disabled button has gray bg and reverts to red', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'red'});

});

test('clicked disabled button has gray bg and reverts to blue', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'blue'});
});
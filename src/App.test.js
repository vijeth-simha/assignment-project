import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Below chart signifies the highest number of page views in Bar Chart/i);
  expect(linkElement).toBeInTheDocument();
});

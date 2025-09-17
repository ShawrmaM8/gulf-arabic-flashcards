import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  expect(screen.getByText(/Gulf Arabic Flashcards/i)).toBeInTheDocument();
});
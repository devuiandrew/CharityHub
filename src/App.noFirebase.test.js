import { render, screen } from '@testing-library/react';
import App from './App';

// No REACT_APP_FIREBASE_* variables are set in tests, so this uses the real
// firebase module in its "not configured" mode.
test('renders without Firebase config and hides sign-in', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to charity hub/i })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /signin/i })).not.toBeInTheDocument();
});

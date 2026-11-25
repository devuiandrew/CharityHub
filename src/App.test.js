import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Authentication/firebase', () => ({
  isFirebaseConfigured: true,
  auth: {
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
    signOut: jest.fn(),
  },
  db: {},
  signInWithGoogle: jest.fn(),
}));

test('renders the landing page for a signed-out user', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to charity hub/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /signin/i })).toBeInTheDocument();
});

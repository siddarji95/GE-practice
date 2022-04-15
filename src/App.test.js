import { render, screen, act } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/parent component/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Child Component after 5 seconds', async () => {
  render(<App />);
  act(() => jest.advanceTimersByTime(5000));
  expect(screen.getByText(/child component/i)).toBeInTheDocument()
});

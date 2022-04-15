import { render, screen } from '@testing-library/react';
import Child from './Child';

test('renders App component', () => {
  render(<Child />);
  const element = screen.getByText(/child component/i);
  expect(element).toBeInTheDocument();
});

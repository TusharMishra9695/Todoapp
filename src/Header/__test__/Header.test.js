import { render, screen } from '@testing-library/react';
import Header from  "../Header"
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

it('should render element', () => {
  render(<Header title="Header" />);
  const  HeadingElement = screen.getByText(/Todo App/i);
  expect(HeadingElement).toBeInTheDocument();
});

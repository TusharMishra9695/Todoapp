import { render, screen } from '@testing-library/react';
import TodoItem from  "../TodoItem"
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

it('should render element', () => {
  render(<TodoItem   placeholder="Add text to show" />);
  const inpuText = screen.getByPlaceholderText(/Add text to show/i);
  expect(inpuText).toBeInTheDocument();
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Test } from '@components/test';

describe('Component Test', () => {
  it('renders a heading', () => {
    render(<Test />);

    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toBeInTheDocument();
  });
});

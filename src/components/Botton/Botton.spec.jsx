import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';


describe('<Button />', () => {
  it('should render the button with the text (Load more)', () => {
    render(<Button text='load more' />);
    // É mais comum em teste asincronos
    expect.assertions(2)
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'btn-primary')
  });

  it('Should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onMorePage={fn} />)
    const button = screen.getByRole('button', {name: /load more/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled()
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="load more" disabled={true}/>);
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    render(<Button text="load more" disabled={false}/>);
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeEnabled();
  });


});
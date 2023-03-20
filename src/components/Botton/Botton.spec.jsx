import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './index';


describe('<Button />', () => {
  it('should render the button with the text (Load more)', () => {
    const fn = jest.fn();
    render(<Button text='load more' onMorePage={fn} />);
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
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onMorePage={fn}/>);
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false}  onMorePage={fn}/>);
    const button = screen.getByRole('button', {name: /load more/i });
    expect(button).toBeEnabled();
  });


});

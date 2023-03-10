import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const props = {
  title: 'title1',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png'
};

describe('<PostCard /> ', () => {
  it('should should render Postcard correctly', () => {
    render(<PostCard {...props} />);
    // const {debug} = render(<PostCard {...props} />);
    // debug();
    expect(screen.getByRole('img', {name: 'title1' })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', {name: 'title1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props}/>);
    expect(container.firstChild).toMatchSnapshot();
  });

});
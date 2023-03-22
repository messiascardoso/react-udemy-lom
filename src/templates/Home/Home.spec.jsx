import { rest } from 'msw';
// Intercepta as chamadas de uma API;
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';

//Incluir urls que serão interceptadas
const handlers = [
  rest.get('*/posts', async (req, res, ctx) => {
    //ctx = contexto/conteúdo
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title2',
          body: 'body2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title3',
          body: 'body3',
        },
      ]),
    );
  }),
  rest.get('*/photos', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'https://via.placeholder.com/600/771796',
          thumbnailUrl: 'https://via.placeholder.com/150/771796',
        },
        {
          albumId: 1,
          id: 3,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://via.placeholder.com/600/24f355',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

describe('<Home />', () => {
  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);
    //screen.debug();
  });
});

import { ServerSideRenderingPage } from './app.po';

describe('server-side-rendering App', () => {
  let page: ServerSideRenderingPage;

  beforeEach(() => {
    page = new ServerSideRenderingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

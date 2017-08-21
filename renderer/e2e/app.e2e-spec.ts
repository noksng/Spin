import { RendererPage } from './app.po';

describe('renderer App', () => {
  let page: RendererPage;

  beforeEach(() => {
    page = new RendererPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

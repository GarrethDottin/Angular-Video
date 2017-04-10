import { videochatPage } from './app.po';

describe('videochat App', function() {
  let page: videochatPage;

  beforeEach(() => {
    page = new videochatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

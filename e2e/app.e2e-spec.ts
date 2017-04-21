import { ITunesApiPage } from './app.po';

describe('i-tunes-api App', () => {
  let page: ITunesApiPage;

  beforeEach(() => {
    page = new ITunesApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

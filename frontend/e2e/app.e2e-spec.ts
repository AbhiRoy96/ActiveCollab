import { BlueboxPage } from './app.po';

describe('bluebox App', () => {
  let page: BlueboxPage;

  beforeEach(() => {
    page = new BlueboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

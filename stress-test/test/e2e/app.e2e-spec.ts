import { Meal.LyAppPage } from './app.po';

describe('meal.ly-app App', () => {
  let page: Meal.LyAppPage;

  beforeEach(() => {
    page = new Meal.LyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

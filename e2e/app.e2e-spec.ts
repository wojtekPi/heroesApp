import { HeroesAppPage } from './app.po';

describe('heroes-app App', () => {
  let page: HeroesAppPage;

  beforeEach(() => {
    page = new HeroesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My first app - heroes App');
  });
});

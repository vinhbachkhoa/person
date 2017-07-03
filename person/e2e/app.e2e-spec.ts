import { PersonPage } from './app.po';

describe('person App', () => {
  let page: PersonPage;

  beforeEach(() => {
    page = new PersonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

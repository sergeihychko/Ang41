import { Ang41Page } from './app.po';

describe('ang41 App', () => {
  let page: Ang41Page;

  beforeEach(() => {
    page = new Ang41Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

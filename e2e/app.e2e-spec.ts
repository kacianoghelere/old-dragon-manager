import { OldDragonManagerPage } from './app.po';

describe('old-dragon-manager App', function() {
  let page: OldDragonManagerPage;

  beforeEach(() => {
    page = new OldDragonManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

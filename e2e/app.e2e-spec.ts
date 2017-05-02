import { TestAngularStylesPage } from './app.po';

describe('test-angular-styles App', () => {
    let page: TestAngularStylesPage;

    beforeEach(() => {
        page = new TestAngularStylesPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});

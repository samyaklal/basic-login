import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login Page');
  });

  it('should display error message', () => {
    page.navigateTo();
    expect(page.checkError()).toEqual('Invalid Credentials');
  });

  it('should navigate to dashboard', () => {
    page.navigateTo();
    expect(page.checkLogin()).toEqual('Dashboard');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

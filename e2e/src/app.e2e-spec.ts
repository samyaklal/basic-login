import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display heading', () => {
    expect(page.getTitleText()).toEqual('Login Page');
  });

  it('should display input field for user name with correct placeholder', () => {
    expect(page.getUserNamePlaceholder()).toBe('User Name');
  });
  
  it('should display input field for password with correct placeholder', () => {
    expect(page.getPasswordPlaceholder()).toBe('Password');
  });

  it('should display login button', () => {
    expect(page.getLoginButtonText()).toBe('Login');
  });

  it('should display error message on empty user name', () => {
    page.setPassword('password');

    page.login();

    expect(page.checkError()).toEqual('Invalid Credentials');
  });

  it('should display error message on empty password', () => {
    page.setUserName('username');

    page.login();
    
    expect(page.checkError()).toEqual('Invalid Credentials');
  });

  it('should display error message on wrong credentials', () => {
    page.setUserName('wrong user name');
    page.setPassword('wrong password');

    page.login();
    
    expect(page.checkError()).toEqual('Invalid Credentials');
  });

  it('should display error message on empty credentials', () => {
    page.login();
    
    expect(page.checkError()).toEqual('Invalid Credentials');
  });

  it('should navigate to dashboard', () => {
    page.setUserName('username');
    page.setPassword('password');

    page.login();

    browser.waitForAngular();
    
    expect(page.getTitleText()).toEqual('Dashboard');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

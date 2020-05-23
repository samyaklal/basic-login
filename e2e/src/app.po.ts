import { browser, by, element } from 'protractor';

export class AppPage {
  userName = element(by.className('user-name'));
  password = element(by.className('password'));
  loginButton = element(by.tagName('button'));

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  setUserName(userName): void {
    this.userName.sendKeys(userName);
  }

  setPassword(password): void {
    this.password.sendKeys(password);
  }

  login(): void {
    this.loginButton.click();
  }

  getUserNamePlaceholder(): Promise<string> {
    return this.userName.getAttribute('placeholder') as Promise<string>;
  }

  getPasswordPlaceholder(): Promise<string> {
    return this.password.getAttribute('placeholder') as Promise<string>;
  }

  getLoginButtonText(): Promise<string> {
    return this.loginButton.getText() as Promise<string>;
  }

  checkError(): Promise<string> {
    return element(by.css('p')).getText() as Promise<string>;
  }
}

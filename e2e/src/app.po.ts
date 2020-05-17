import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  checkError(): Promise<string> {
    element(by.css('button')).click();
    return element(by.css('p')).getText() as Promise<string>;
  }

  checkLogin(): Promise<string> {
    const userName = element(by.css('.user-name'));
    const password = element(by.css('.password'));
    userName.sendKeys('admin');
    password.sendKeys('admin');
    element(by.css('button')).click();
    browser.waitForAngular();
    return element(by.css('h1')).getText() as Promise<string>;
  }
}

import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

 getPageOneTitleText() {
    return element(by.tagName('page-calculator')).element(by.tagName('ion-title')).getText();
  }
  getPageOneButtonText() {
    return element(by.tagName('page-calculator')).element(by.id('calc')).getText();
  }
  getPageOneFieldText() {
    return element(by.tagName('page-calculator')).element(by.tagName('ion-label')).getText();
  }
}
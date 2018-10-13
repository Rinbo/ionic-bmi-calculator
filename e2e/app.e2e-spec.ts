import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying BMI-calculator', () => {
      expect(page.getTitle()).toContain('BMI-calculator')
    });
    it('root page should have a title saying Calculator', () => {
      expect(page.getPageOneTitleText()).toContain('Calculator')
    });

    it('should have a button saying Calculate', () => {
      expect(page.getPageOneButtonText()).toContain('CALCULATE')
    });

    it('should have an input field Weight (kg)', () => {
      expect(page.getPageOneFieldText()).toContain('Weight (kg)')
    });

  })
});
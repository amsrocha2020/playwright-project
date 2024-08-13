import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { CheckboxPage } from '../pages/checkboxList.page';

interface ExtendedFixtures {
  checkboxPage: CheckboxPage;
  homePage: HomePage;
}

export const test = base.extend<ExtendedFixtures>({
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

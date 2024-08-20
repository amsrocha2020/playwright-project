import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { CheckboxPage } from '../pages/checkboxList.page';
import { DragAndDropPage } from '../pages/dragAndDrop.page';

interface ExtendedFixtures {
  homePage: HomePage;
  checkboxPage: CheckboxPage;
  dragAndDropPage: DragAndDropPage;
}

export const test = base.extend<ExtendedFixtures>({
  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  dragAndDropPage: async ({ page }, use) => {
    await use(new DragAndDropPage(page));
  },
});

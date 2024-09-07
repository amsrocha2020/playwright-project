import { expect } from '@playwright/test';
import { test } from '../fixtures';

test.beforeEach(async ({ page, homePage }) => {
  // Open Homepage and click in the link Checkboxes
  await page.goto(process.env.BASE_URL!);
  await page.waitForLoadState();
  await homePage.clickLink('Checkboxes');
});

test.describe('Checkboxes', () => {
  test('should check the first checkbox', async ({ checkboxPage }) => {
    // Check the first checkbox
    await checkboxPage.checkFirstCheckbox();

    // Assert that the first checkbox is checked
    const isChecked = await checkboxPage.isFirstCheckboxChecked();
    expect(isChecked).toBe(true);
  });

  test('should uncheck the second checkbox', async ({ checkboxPage }) => {
    // Uncheck the second checkbox
    await checkboxPage.uncheckSecondCheckbox();

    // Assert that the second checkbox is unchecked
    const isUnchecked = await checkboxPage.isSecondCheckboxUnchecked();
    expect(isUnchecked).toBe(true);
  });
});

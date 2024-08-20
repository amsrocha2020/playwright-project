import { expect } from '@playwright/test';
import { test } from '../fixtures';

test.beforeEach(async ({ page, homePage }) => {
  // Open Homepage and click in the link Drag and Drop
  await page.goto(process.env.BASE_URL!);
  await homePage.clickLink('Drag and Drop');
});

test.describe('Drang and Drop', () => {
  test('should Drag Block A to Block B', async ({ dragAndDropPage }) => {
    // Check the first checkbox
    await dragAndDropPage.dragColumnAToColumnB();

    // Verify the result
    const columnAText = await dragAndDropPage.getColumnAText();
    const columnBText = await dragAndDropPage.getColumnBText();

    expect(columnAText).toBe('B');
    expect(columnBText).toBe('A');
  });
});

import { Locator, Page } from '@playwright/test';
import { test } from '../fixtures';

export class CheckboxPage {
  readonly page: Page;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstCheckbox = page.getByRole('checkbox').first();
    this.secondCheckbox = page.getByRole('checkbox').nth(1);
  }

  // Method to check the first checkbox
  async checkFirstCheckbox() {
    await test.step('Check first checkbox', async () => {
      await this.firstCheckbox.check();
    });
  }

  // Method to uncheck the second checkbox
  async uncheckSecondCheckbox() {
    await test.step('Uncheck second checkbox', async () => {
      if (await this.secondCheckbox.isChecked()) {
        await this.secondCheckbox.uncheck();
      }
    });
  }

  // Method to verify if the first checkbox is checked
  async isFirstCheckboxChecked(): Promise<boolean> {
    return await this.firstCheckbox.isChecked();
  }

  // Method to verify if the second checkbox is unchecked
  async isSecondCheckboxUnchecked(): Promise<boolean> {
    return !(await this.secondCheckbox.isChecked());
  }
}

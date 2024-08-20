import { Locator, Page } from '@playwright/test';

export class DragAndDropPage {
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async dragColumnAToColumnB(): Promise<void> {
    await this.columnA.dragTo(this.columnB);
  }

  async getColumnAText(): Promise<string | null> {
    return this.columnA.locator('header').textContent();
  }

  async getColumnBText(): Promise<string | null> {
    return this.columnB.locator('header').textContent();
  }
}

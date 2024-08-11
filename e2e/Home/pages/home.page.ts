import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly checkboxLink: Locator

  constructor(page: Page) {
    this.page = page
  }

  async clickLink(linkOption: string) {
    await this.page.getByRole('link', { name: linkOption }).click()
  }
}

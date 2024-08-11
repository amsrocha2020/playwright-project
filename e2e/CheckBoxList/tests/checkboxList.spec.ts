import { test, expect } from '@playwright/test'
import { HomePage } from '../../Home/pages/home.page'
import { CheckboxPage } from '../pages/checkboxList.page'

let checkboxPage: CheckboxPage

test.beforeEach(async ({ page }) => {
  // Open Homepage and click in the link Checkboxes
  const homePage = new HomePage(page)
  await page.goto(process.env.BASE_URL!)
  await homePage.clickLink('Checkboxes')

  // Instantiate the Page Object - Checkboxes page
  checkboxPage = new CheckboxPage(page)
})

test.describe('Checkboxes', () => {
  test('should check the first checkbox', async ({ page }) => {
    // Check the first checkbox
    await checkboxPage.checkFirstCheckbox()

    // Assert that the first checkbox is checked
    const isChecked = await checkboxPage.isFirstCheckboxChecked()
    expect(isChecked).toBe(true)
  })

  test('should uncheck the second checkbox', async ({ page }) => {
    // Uncheck the second checkbox
    await checkboxPage.uncheckSecondCheckbox()

    // Assert that the second checkbox is unchecked
    const isUnchecked = await checkboxPage.isSecondCheckboxUnchecked()
    expect(isUnchecked).toBe(true)
  })
})

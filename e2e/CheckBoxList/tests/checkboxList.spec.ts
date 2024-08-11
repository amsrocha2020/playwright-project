import { test, expect } from '@playwright/test'
import { CheckboxPage } from '../pages/checkboxList.page'

let checkboxPage: CheckboxPage

test.beforeEach(async ({ page }) => {
  // Instantiate the Page Object
  checkboxPage = new CheckboxPage(page)

  // Navigate to the page
  await page.goto('https://the-internet.herokuapp.com/checkboxes')
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

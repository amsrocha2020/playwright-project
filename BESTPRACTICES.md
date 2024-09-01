# Playwright Best Practices

## 1. Make Tests Behavioral

Focus on testing the behavior and user interactions of your application. Write tests that simulate real user actions and validate the expected outcomes. This approach helps ensure that your tests cover the intended functionality.

## 2. Make Tests Isolated

Each test should be independent of others, meaning that the state or outcome of one test should not affect another. Isolated tests are easier to debug, maintain, and scale.

## 3. Avoid Testing Third-Party Dependencies

Third-party services or APIs should be mocked or stubbed out. This avoids flaky tests due to external service outages and ensures that your tests are focused on your application code.

## 4. Locators

When using locators in Playwright, prefer them in the following order from most preferred to least preferred:

1. `getByTestId` (Most preferred)
2. `getByTitle`
3. `getByRole`
4. `getByLabel`
5. `getByPlaceholder`
6. `getByAltText`
7. `getByText`
8. `locator` (Avoid if possible)

## 5. Use Web-First Assertions

Prefer web-first assertions provided by Playwright, which automatically wait for elements to be ready before asserting. This prevents flakiness due to timing issues.

- **Correct:**

  ```javascript
  await expect(page.getByText('success')).toBeVisible();
  ```

- **Incorrect:**
  ```javascript
  expect(await page.getByText('success').isVisible()).toBe(true);
  ```

## 6. Add Assertions to Each Test

Ensure that each test contains at least one assertion. A test without an assertion is just a series of actions, which defeats the purpose of testing.

- **Incorrect:**

  ```javascript
  test('test without assertion', async ({ page }) => {
    await page.getByTestId('add-task-button').click();
  });
  ```

- **Correct:**
  ```javascript
  test('test with assertion', async ({ page }) => {
    await page.getByTestId('add-task-button').click();
    await expect(page.getByTestId('task-item')).toHaveCount(1);
  });
  ```

## 7. Avoid Too Many Nested `describe`, `test`, and `step` Blocks

Deeply nested blocks can make tests harder to read and maintain. Keep nesting shallow and meaningful.

## 8. Beware of Missing `await`

Ensure that all asynchronous actions are awaited to prevent unexpected behaviors in tests.

## 9. Avoid Conditional Logic Within Tests

Tests should be deterministic. Avoid using conditional statements (`if`, `switch`, etc.) within test blocks as they can lead to unpredictable test outcomes.

## 10. Avoid Using Element Handles

Prefer using locators over element handles. Locators offer more powerful and flexible operations.

- **Incorrect:**

  ```javascript
  const buttonHandle = await page.$('button');
  await buttonHandle.click();
  ```

- **Correct:**
  ```javascript
  const buttonLocator = page.locator('button');
  await buttonLocator.click();
  ```

## 11. Avoid Using `{ force: true }`

Forcing actions like clicks can hide underlying issues in your tests. Avoid using `{ force: true }` unless absolutely necessary, and always investigate the cause of the issue first.

## 12. Avoid Waiting for `networkidle`

Relying on `networkidle` for waiting can be unreliable, especially with modern SPAs that often have ongoing network requests. Prefer more specific wait conditions.

## 13. Avoid Using `nth` Methods

Using `.first()`, `.last()`, and `.nth()` locators can make tests fragile. It's better to be more explicit with your locators.

- **Avoid:**
  ```javascript
  page.locator('button').first();
  page.locator('button').last();
  page.locator('button').nth(3);
  ```

## 14. Double Check Before Using Negative Assertions

Be careful when using negative assertions, as they might not always be the best approach.

- **Incorrect:**

  ```javascript
  await expect(locator).not.toBeVisible();
  ```

- **Correct:**
  ```javascript
  await expect(locator).toBeHidden();
  ```

For counting assertions:

- **Incorrect:**

  ```javascript
  await expect(locator).not.toHaveCount(1);
  ```

- **Correct:**
  ```javascript
  await expect(locator).toHaveCount(0);
  ```

# Playwright Web Testing Project

## Overview

This project is a Playwright-based automated testing framework designed to test various types of web elements. It provides a comprehensive set of tests for different web components, ensuring that your web application is functioning correctly across multiple browsers and platforms.

## Features

- **Cross-browser Testing**: Run tests on multiple browsers including Chromium, Firefox, and WebKit.
- **Element Interaction**: Test interactions with different web elements like buttons, links, forms, and more.
- **Responsive Design Testing**: Validate how your web elements respond across various screen sizes.
- **Page Navigation**: Automate page transitions and validate their behavior.
- **Assertion Library**: Built-in assertions to verify the state of web elements.
- **Code Quality**: Integrated ESLint for code linting and Prettier for code formatting.
- **Customizable**: Easily extend or modify tests to suit your specific needs.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/amsrocha2020/playwright-project.git
    cd playwright-web-testing
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or if you prefer yarn:

    ```bash
    yarn install
    ```

3. Install Playwright browsers:

    ```bash
    npx playwright install
    ```

## Running Tests

To run all tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test e2e/forlderName/tests/example.spec.ts
```

To run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

To view the test results:

```bash
npx playwright show-report
```

## Code Quality

This project uses **ESLint** for maintaining code quality and **Prettier** for consistent code formatting.

### Running ESLint

To check for linting errors:

```bash
npx eslint .
```

### Running Prettier

To format the code:

```bash
npx prettier --write .
```

You can also integrate ESLint and Prettier with your IDE for real-time linting and formatting.

## Important Points to Remember

- **Assertions in Spec Files**: Always do all assertions in your spec files, not in the Page Object classes. This keeps your tests clean and your page objects focused on interaction logic.

- **Page Interactions in Page Objects**: All page interactions, including locators, should reside in Page Object files. Avoid placing locators directly in spec files to maintain separation of concerns.

- **Use Playwright's `expect` Assertions**: Playwright's `expect` assertions should be preferred over generic assertions like `toBe`. Playwright's built-in error handling provides better debugging and error messages.

- **Leverage Fixtures**: Fixtures are extremely useful for setting up and tearing down tests, especially for sharing state between different tests.

- **Component-Based Page Objects**: Utilize a component-based approach for Page Objects. For example, create page component classes for common elements like tables, which can be reused across multiple pages. This reduces code duplication. Check out this [discussion](https://github.com/microsoft/playwright/issues/1604#issuecomment-1004711489) for more insights.

- **Parametrize and Dynamically Generate Tests**: Don’t hesitate to parametrize tests or dynamically generate them for repetitive testing scenarios. If you need to validate the same behavior across multiple pages, use an object and loop through it rather than duplicating the test code.

## Project Structure

- **`tests/`**: Contains all test files.
- **`pages/`**: Page Object Model (POM) classes that encapsulate web elements and page interactions.
- **`fixtures/`**: Setup and teardown scripts for reusable test setup.
- **`playwright.config.ts`**: Configuration file for Playwright.
- **`.eslintrc.js`**: Configuration file for ESLint.
- **`.prettierrc`**: Configuration file for Prettier.

## Writing Tests

Tests are written using Playwright's API. Below is a basic example of a test:

```typescript
import { test, expect } from '@playwright/test';

test('should display correct page title', async ({ page }) => {
  await page.goto('https://example.com');
  expect(await page.title()).toBe('Example Domain');
});
```

## Customizing Tests

You can extend the framework by adding new tests, modifying existing ones, or creating new Page Object Models. Simply follow the structure provided in the `tests/` and `pages/` directories.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

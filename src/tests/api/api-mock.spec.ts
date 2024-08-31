//https://playwright.dev/docs/mock#mock-api-requests
//https://playwright.dev/docs/network
//https://timdeschryver.dev/blog/intercepting-http-requests-with-playwright#intercept-a-request-to-return-mocked-response

//-> https://playwright.dev/docs/mock#mock-api-requests

// Web APIs are usually implemented as HTTP endpoints.
// Playwright provides APIs to mock and modify network traffic, both HTTP and HTTPS.
// Any requests that a page does, including XHRs and fetch requests, can be tracked, modified and mocked.+

// More info about request handling at: https://playwright.dev/docs/network#abort-requests

import { test, expect } from '@playwright/test';
test.describe('Mock data using Playwright - Abort', () => {
  test.beforeEach(async ({ context }) => {
    // Custom Route that mocks network for a browser context.
    // Block any css requests for each test in this file.
    await context.route(/.css$/, (route) => route.abort());
    //We can use page.route to mock a single page.
  });
  test('loading the website without css! ', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });
});

test.describe('Mock data using Playwright - Fulfill ', () => {
  test("mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async (route) => {
      const json = [
        { name: 'Banana', id: 1 },
        { name: 'Strawberry', id: 21 },
      ];
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Banana')).toBeVisible();
  });

  test('gets the json from api and adds a new fruit', async ({ page }) => {
    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      json.push({ name: 'Loquat', id: 100 });
      // Fulfill using the original response, while patching the response body
      // with the given JSON object.
      await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the new fruit is visible
    await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
  });
});

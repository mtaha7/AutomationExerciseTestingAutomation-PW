// @ts-check
import { defineConfig, devices } from '@playwright/test';

require('dotenv').config()

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 30 * 1000
  },
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        trace: 'on-first-retry',
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure'
      }
    },
    {
      name: 'firefox',
      use: {
        trace: 'on-first-retry',
        browserName: 'firefox',
        headless: false
      }
    },
    {
      name: 'safari',
      use: {
        trace: 'on-first-retry',
        browserName: 'webkit',
        headless: false
      }
    },
    {
      name: 'api',
      use: {
        trace: 'on-first-retry'
      }
    }
  ],
});


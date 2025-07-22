import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "e2e",
  fullyParallel: true,
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: "test-results",
  // Glob patterns or regular expressions to ignore test files.
  testIgnore: "*test-assets",
  // Reporter to use
  reporter: "null",
  // Glob patterns or regular expressions that match test files.
  testMatch: "*e2e/*.test.js",
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://localhost:5173",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
  // Run your local dev server before starting the tests.

  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
  },
  projects: [
    /* Test against desktop browsers */
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chromium" },
    },
  ],
});
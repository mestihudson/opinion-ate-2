import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never', }, ],
    ['list', { printSteps: true, }, ],
  ],
  use: {
    actionTimeout: 0,
    baseURL: process.env.E2E_BASE_URL || 'http://application:4200',
    trace: 'on-first-retry',
    video: { mode: 'on', },
    screenshot: { mode: 'on', fullPage: true, },
    launchOptions: {
      slowMo: parseInt(process.env.E2E_SLOW_MO || 0),
    },
  },
  testMatch: process.env.E2E_TEST_MATCH || '**/*.e2e-spec.ts',
  grep: new RegExp(process.env.E2E_GREP || ''),
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

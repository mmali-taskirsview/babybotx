import { test, expect } from '@playwright/test';

test('home loads', async ({ page }) => {
  await page.goto('/en');
  await expect(page.locator('h1')).toContainText('Your Home');
});

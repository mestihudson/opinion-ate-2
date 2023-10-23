import { test, expect } from '@playwright/test';

test.describe('Listing Restaurants', () => {
  test('show restaurants from the server', async ({ page }) => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    await page.route('https://api.outsidein.dev/*/restaurants', (route) => {
      return route.fulfill([
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ]);
    });

    await page.goto('/');
    await expect(await page.getByText(sushiPlace)).toBeVisible();
    await expect(await page.getByText(pizzaPlace)).toBeVisible();
  });
});

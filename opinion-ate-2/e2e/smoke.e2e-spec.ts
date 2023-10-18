import { test, expect } from '@playwright/test';

test('deve verificar com sucesso o título da página principal', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/OpinionAte2/);
});

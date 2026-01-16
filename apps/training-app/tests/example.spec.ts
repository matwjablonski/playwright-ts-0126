import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('mojtest', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputLoginIn = await page.getByRole('textbox', { name: 'Wprowadź hasło...' });
    await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).click();
    await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).fill('admin123');
    await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).press('Enter');

    await page.getByRole('button', { name: 'Dodaj zadanie' }).click();
    await expect(await page.getByText('Tytuł zadania musi mieć conajmniej 3 znaki')).toBeVisible();
    await page.getByRole('textbox', { name: 'Wpisz tytuł zadania (min. 3' }).fill('testowe zadanie');
    await page.getByRole('textbox', { name: 'Wpisz szczegółowy opis zadania' }).fill('  opis testowego zadania');
    
    const date = new Date(new Date().setDate(new Date().getDate() + 1))
    const formattedDate = date.toISOString().split('T')[0];
    await page.locator('input[name="due_date"]').fill(formattedDate);
    
    await page.locator('select[name="priority"]').selectOption('1');
    await page.getByRole('button', { name: 'Dodaj zadanie' }).click();
    
    expect(page.getByText('testowe zadanie')).toBeVisible();
})

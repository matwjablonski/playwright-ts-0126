import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { todosMock } from './mocks/todos.mock';

test.describe('Cards tests', () => {
    let loginPage: LoginPage;

    test.beforeAll(({ page }) => {
        loginPage = new LoginPage(page)
    })

    test('check nav menu links', async ({ page }) => {
        await page.goto('http://localhost:5173');
        await loginPage.login('admin123');
        const home = page.locator('nav :left-of(:text("O aplikacji")):nth-child(2)');

        await expect(home).toHaveText('Strona główna');

        await home.click();
        const footer = page.locator('footer');
        await expect(footer).toHaveScreenshot();

        await expect(footer).toHaveText(/Todo App/);
    });
});

test('count cards', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const cards = await page.getByTestId('card-item');
  const count = await cards.count();
  expect(count).toBe(3);
});



test('mock API response', async ({ page }) => {
    page.route('**/fact', route => {
        route.fulfill({
            status: 200,
            body: JSON.stringify(todosMock),
        });
    });
    const loginPage = new LoginPage(page);
    await page.goto('http://localhost:5173');

    await loginPage.login('admin123');

    const home = page.locator('nav :left-of(:text("O aplikacji")):nth-child(2)');

    await expect(home).toHaveText('Strona główna');

    await home.click();

    const cards = page.locator('.card');
    const count = await cards.count();
    // expect(count).toBe(todosMock.data.length);

});
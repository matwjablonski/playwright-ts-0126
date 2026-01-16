import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mateuszjablonski.com/');
  await page.getByRole('heading', { name: 'Podcast, blog, kursy, które' }).click();
  await page.getByText('zostać lepszym programistą').click();
  await page.getByRole('link', { name: 'Zobacz bezpłatne materiały' }).click();
  await page.getByRole('heading', { name: 'Blog' }).click();
  await page.getByRole('img', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'Wpisz temat, który Cię' })
  await page.getByText('01.06.2023').nth(1).click();
  await page.getByRole('textbox', { name: 'Wpisz temat, który Cię' }).fill('javascript');
  await page.getByText('NextJS i co dalej').click();
  await page.getByText('01.06.2023').nth(1).click();
});

const languages = ['pl', 'en', 'de'];

const translations = {
  pl: { searchPlaceholder: 'Wpisz temat, który Cię' },
  en: { searchPlaceholder: 'Type a topic that' },
  de: { searchPlaceholder: 'Geben Sie ein Thema ein, das' },
}

test('dasd', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  const link =await page.getByRole('link', { name: 'Blog' });
  expect(link).toBeVisible();
  const count = await page.getByRole('link', { name: 'Blog' }).count()
  expect(count).toBe(1);
})

// Wpisz temat === HEADER_SEARCHBAR_TYPE_TOPIC

languages.forEach(lang => {
  test(`test-lang-${lang}`, async ({ page }) => {
    await page.goto(`https://mateuszjablonski.com/${lang}/`);
    await page.getByRole('link', { name: 'Blog' }).click();
    await page.getByRole('img', { name: 'search' }).click();
    await page.getByRole('textbox', { name: translations[lang].searchPlaceholder }).fill('javascript');
    await page.getByText('NextJS i co dalej').click();
    await page.getByText('01.06.2023').nth(1).click();
  });
});

test('test2', async ({ page, context, browser, browserName, request }) => {
  await page.goto('https://mateuszjablonski.com/');

  if (browserName === 'chromium') {
    // chromium only
  }

});

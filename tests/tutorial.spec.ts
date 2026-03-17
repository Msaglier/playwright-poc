import { expect } from '@playwright/test' ;
import { test } from './fixtures';
//import { test } from './my-test-w-fixture'
//import { CookiesPage } from './cookies-page';

test.beforeEach('open journey url', async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://nws-main-cus.hove.io/full/journeys/hove?user_consent=true');
  await expect(page).toHaveTitle(/Navitia Web Solution/);
})

test.beforeEach('Choose cookie option', async ({ cookiesPage }) => {
  //fixture
  await cookiesPage.defaultChoice()
})

test.describe('cookies', () => {
  test('accept cookies', async ({ page }) => {
    const buttonAccept = page.getByTestId('accept_geoloc')

    //await expect(buttonAccept).toBeVisible();
    //await buttonAccept.click();
    await expect(buttonAccept).toBeHidden();
  });

  test('refuse cookies', async ({ page }) => {
    const buttonRefuse = page.getByTestId('reject_geoloc')

    //await expect(buttonRefuse).toBeVisible();
    //await buttonRefuse.click();
    await expect(buttonRefuse).toBeHidden();
  });
});
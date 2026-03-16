import { test as base, mergeTests } from '@playwright/test'
import { test as cookieTest } from './my-test-w-fixture'

export const EachTest = base.extend<{ forEachTest: void }>({
    forEachTest: [async ({ page }, use) => {
        //run before every test
        await page.goto('https://nws-main-cus.hove.io/full/journeys/hove?user_consent=true');
        await use();
        // run after
        console.log('Last url : ', page.url());
    }, { auto: true }],     // lancé à chaque debut de test
});

export const test = mergeTests(EachTest, cookieTest)
import { test as base } from '@playwright/test';
import { CookiesPage } from './cookies-page';

type MyFixtures = {
    cookiesPage: CookiesPage;
}

// On augmente la base de test en y ajoutant une fixture.
// ce nouveau "test" sera utilisable dans tous les fichiers de tests et chaque test en beneficiera.
export const test = base.extend<MyFixtures>({
    cookiesPage: async ({ page }, use) => {
        await use(new CookiesPage(page));
    }
});
export { expect } from '@playwright/test';
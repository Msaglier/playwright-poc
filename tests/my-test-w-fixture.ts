import { test as base } from '@playwright/test';
import { CookiesPage } from './cookies-page';


//declarer options
export type MyOptions = {
    cookiesAccepted: boolean;
};

type MyFixtures = {
    cookiesPage: CookiesPage;
}

// On augmente la base de test en y ajoutant une fixture.
// ce nouveau "test" sera utilisable dans tous les fichiers de tests et chaque test en beneficiera.
export const test = base.extend<MyOptions & MyFixtures>({
    // definir une option avec une valeur de base.
    // possible de l'override dans la config ensuite
    cookiesAccepted: true,

    // depends de l'option
    cookiesPage: async ({ page, cookiesAccepted }, use) => {
        await use(new CookiesPage(page, cookiesAccepted));
    }
});
export { expect } from '@playwright/test';

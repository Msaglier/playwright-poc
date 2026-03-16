import type { Page, Locator } from '@playwright/test'

export class CookiesPage {
    private readonly buttonAccept: Locator;
    private readonly buttonRefuse: Locator;

    constructor(public readonly page: Page) {
        this.buttonAccept = this.page.getByTestId('accept_geoloc');
        this.buttonRefuse = this.page.getByTestId('reject_geoloc');
    }

    async accept() {
        await this.buttonAccept.click();
    }

    async refuse() {
        await this.buttonRefuse.click();
    }
}
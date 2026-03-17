import type { Page, Locator } from '@playwright/test'

export class CookiesPage {
    private readonly buttonAccept: Locator;
    private readonly buttonRefuse: Locator;
    private readonly defaultOption: boolean;

    constructor(public readonly page: Page, public readonly option: boolean) {
        this.buttonAccept = this.page.getByTestId('accept_geoloc');
        this.buttonRefuse = this.page.getByTestId('reject_geoloc');
        this.defaultOption = this.option
    }

    async defaultChoice() {
        if (this.defaultOption) {
            this.accept()
        } else {
            this.refuse()
        }
    }

    async accept() {
        await this.buttonAccept.click();
    }

    async refuse() {
        await this.buttonRefuse.click();
    }
}
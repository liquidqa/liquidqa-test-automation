import { Page, Locator } from "@playwright/test"
import { Card } from "../componenets/card"

export class FormLayoutsPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    cardByTitle(title: string): Card {
        const cardRoot = this.page.locator('nb-card', {
            has: this.page.locator('nb-card-header', { hasText: title })
        });

        return new Card(cardRoot);
    }
}
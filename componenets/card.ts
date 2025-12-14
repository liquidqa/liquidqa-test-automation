import { Locator } from "@playwright/test";

export class Card {
    constructor(private readonly root: Locator) { }

    radioButton(optionText: string): Locator {
        return this.root.locator('label', { hasText: optionText })
    }

    submitButton(): Locator {
        return this.root.locator('button[type="submit"]');
    }

    emailImputFiled(): Locator {
        return this.root.locator('input[type="email"]')
    }

    passwordImputFiled(): Locator {
        return this.root.locator('input[type="password"]')
    }

    checkbox(): Locator {
        return this.root.locator('input[type="checkbox"]')
    }

    async selectCheckbox() {
        if (!(await this.isChecked())) {
            await this.checkbox().click({ force: true })
        }
    }

    async unSelectCheckbox() {
        if (await this.isChecked()) {
            await this.checkbox().click({ force: true })
        }
    }

    async isChecked(): Promise<boolean> {
        return await this.checkbox().isChecked();
    }
}
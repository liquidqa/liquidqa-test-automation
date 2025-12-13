import { Locator, Page } from "@playwright/test";

export class NavigationPage {

    readonly page: Page
    readonly inlineFormHeader : Locator
    readonly datepickerHeaders : Locator

    constructor(page: Page) {
        this.page = page
        this.inlineFormHeader = page.locator('nb-card.inline-form-card nb-card-header')
        this.datepickerHeaders = page.locator('nb-card-header')
    }

    async goToFormLayoutsPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }

    async goToDatepickerPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Datepicker').click()
    }

     async goTopTooltipPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Tooltip').click()
    }
}
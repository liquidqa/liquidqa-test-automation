import { Page } from "@playwright/test";
import { NavigationPageSelectors } from "./navigationPageSelectors";

export class NavigationPage {

    readonly page: Page
        readonly selectors: NavigationPageSelectors


    constructor(page: Page) {
        this.page = page
        this.selectors = new NavigationPageSelectors(page)
    }

    /*
    get inlineFormHeader() {
        return this.page.locator('nb-card.inline-form-card nb-card-header');
    }
*/
    async goToFormLayoutsPage() {
        await this.selectors.formsLocator().click()
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
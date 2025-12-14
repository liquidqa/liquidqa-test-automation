import { Page } from "@playwright/test";
import { NavigationPageSelectors } from "./navigationPageSelectors";

export class NavigationPage {

    readonly selectors: NavigationPageSelectors

    constructor(page: Page) {
        this.selectors = new NavigationPageSelectors(page)
    }

    async goToFormLayoutsPage() {
        await this.selectors.formsLocator().click()
        await this.selectors.formsLayoutsLocator().click()
    }

    async goToDatepickerPage() {
        await this.selectors.formsLocator().click()
        await this.selectors.datePickerLocator().click()
    }

    async goTopTooltipPage() {
        await this.selectors.modalLocator().click()
        await this.selectors.tooltipLocator().click()
    }

    async goToDialogPage() {
        await this.selectors.modalLocator().click()
        await this.selectors.dialogLocator().click()
    }

    async goToWindowPage() {
        await this.selectors.modalLocator().click()
        await this.selectors.windowLocator().click()
    }

    async goToPopover() {
        await this.selectors.modalLocator().click()
        await this.selectors.popoverLocator().click()
    }

    async goToToastrPage() {
        await this.selectors.modalLocator().click()
        await this.selectors.toastrLocator().click()
    }
}
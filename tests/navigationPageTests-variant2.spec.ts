import { test, expect } from '@playwright/test'
import { NavigationPage } from '../pages-variant2/navigationPage'

let navigationPage: NavigationPage;

test.beforeEach(async ({ page }) => {
    await page.goto('/')
    navigationPage = new NavigationPage(page)
})

test.afterEach(async ({ page }) => {
    //??
})

test('Verify Title', async ({ page }) => {
    await expect(page).toHaveTitle('playwright-test-admin Demo Application');
});

test('Navigate to Form Layouts page', async ({ page }) => {
    await navigationPage.goToFormLayoutsPage()
    await expect(navigationPage.selectors.inlineFormHeaderLocator()).toHaveText('Inline form')
})

test('Navigate to Datepicker page', async ({ page }) => {
    await navigationPage.goToDatepickerPage()

    const expectedHeaders = ['Common Datepicker', 'Datepicker With Range', 'Datepicker With Disabled Min Max Values']
    const datepickerHeaders = page.locator('nb-card-header')

    await expect(datepickerHeaders).toHaveCount(3)
    for (let i = 0; i < expectedHeaders.length; i++) {
        await expect(datepickerHeaders.nth(i)).toHaveText(expectedHeaders[i])
    }
})

test('Navigate to Dialog page and verify card names', async ({ page }) => {
    await navigationPage.goToDialogPage()
   
    const expectedDialogCardsCount = 5
    const expectedDialogCardsNames = ['Open Dialog', 'Open Without Backdrop', 'Open Without Esc Close', 'Open Without Backdrop Click', 
        'Return Result From Dialog']

    const dialogCards = navigationPage.selectors.cardHeadersLocator()
    
    await expect (dialogCards).toHaveCount(expectedDialogCardsCount)
    for (let i = 0; i < expectedDialogCardsNames.length; i++) {
        await expect(dialogCards.nth(i)).toHaveText(expectedDialogCardsNames[i])
    }
})

test('Navigate to Window page', async ({ page }) => {
    await navigationPage.goToWindowPage()
   await expect(navigationPage.selectors.cardHeadersLocator().nth(0)).toHaveText('Window Form') 
})

test('Navigate to Popover page', async ({ page }) => {
    await navigationPage.goToPopover()
   await expect(navigationPage.selectors.cardHeadersLocator().nth(0)).toHaveText('Popover Position') 
})

test('Navigate to Toastr page', async ({ page }) => {
    await navigationPage.goToToastrPage()
   await expect(navigationPage.selectors.cardHeadersLocator().nth(0)).toHaveText('Toaster configuration') 
})

test('Navigate to Tooltop page and verify tooltip text', async ({ page }) => {
    navigationPage.goTopTooltipPage()

    const toolTipCard = page.locator('nb-card', { hasText: "Tooltip Placements" })
    await toolTipCard.getByRole('button', { name: "Top" }).hover()

    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')
});

/*
namings
# Dialog page displays all cards with correct titles
# Dialog page should not allow empty card name

# Verify Dialog page card titles
# User can navigate to Dialog page
# Should open Dialog page and display cards
# Should navigate to Dialog page and display correct card names
*/
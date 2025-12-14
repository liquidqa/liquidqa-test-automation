import  {test, expect} from '@playwright/test'
import { NavigationPage } from '../pages-variant1/navigationPage'  

let navigationPage: NavigationPage;

test.beforeEach(async({page}) => {
    await page.goto('/')
    navigationPage = new NavigationPage(page)
})

test.afterEach(async ({page}) => {
   //??
})

test('Verify Title', async ({page}) => {
   await expect(page).toHaveTitle('playwright-test-admin Demo Application');
});

test('Navigate to Form Layouts page', async({page}) => {
    await navigationPage.goToFormLayoutsPage()
    await expect(navigationPage.inlineFormHeader).toHaveText('Inline form')
})

test('Navigate to Datepicker page', async({page}) => {
    await navigationPage.goToDatepickerPage()

    const expectedHeaders = ['Common Datepicker', 'Datepicker With Range', 'Datepicker With Disabled Min Max Values']
        
    await expect (navigationPage.datepickerHeaders).toHaveCount(3)
    for (let i = 0; i < expectedHeaders.length; i++) {
        await expect(navigationPage.datepickerHeaders.nth(i)).toHaveText(expectedHeaders[i])        
    }
})

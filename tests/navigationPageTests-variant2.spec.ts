import  {test, expect} from '@playwright/test'
import { NavigationPage } from '../pages-variant2/navigationPage'  

let navigationPage: NavigationPage;

test.beforeEach(async({page}) => {
    await page.goto('/')
    navigationPage = new NavigationPage(page)
})

test.afterEach(async ({page}) => {
   //??
})

test('check Title', async ({page}) => {
   await expect(page).toHaveTitle('playwright-test-admin Demo Application');
});

test('navigate to Form Layouts page', async({page}) => {
    await navigationPage.goToFormLayoutsPage()
    await expect(navigationPage.selectors.inlineFormHeader()).toHaveText('Inline form')
})

test('navigate to Datepicker page', async({page}) => {
    await navigationPage.goToDatepickerPage()

    const expectedHeaders = ['Common Datepicker', 'Datepicker With Range', 'Datepicker With Disabled Min Max Values']
    const datepickerHeaders = page.locator('nb-card-header')
    
    await expect (datepickerHeaders).toHaveCount(3)
    for (let i = 0; i < expectedHeaders.length; i++) {
        await expect(datepickerHeaders.nth(i)).toHaveText(expectedHeaders[i])        
    }
})

test('check tooltip text', async ({page}) => {

  navigationPage.goTopTooltipPage()

  const toolTipCard = page.locator('nb-card', { hasText: "Tooltip Placements" })
  await toolTipCard.getByRole('button', { name: "Top" }).hover()
  
  const tooltip = await page.locator('nb-tooltip').textContent()
  expect(tooltip).toEqual('This is a tooltip')
});


// Navigiranto do stranica de se slaga
// Da izmesa v before?
// kak da razcepq lokatorite dolu ?
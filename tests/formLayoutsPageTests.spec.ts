import { test, expect } from '@playwright/test'
import { FormLayoutsPage } from '../pages-variant2/formLayoutsPage';
import { NavigationPage } from '../pages-variant2/navigationPage'

let navigationPage: NavigationPage;
let formLayoutsPage: FormLayoutsPage;

test.beforeEach(async ({ page }) => {
    await page.goto('/')
    formLayoutsPage = new FormLayoutsPage(page)
    navigationPage = new NavigationPage(page)
})

test('Fill "Using the Grid" form', async ({ page }) => {
    await navigationPage.goToFormLayoutsPage()

    const expectedEmail = 'test@mail.com'
    const expectedPass = 'test123'
    const card = formLayoutsPage.cardByTitle('Using the Grid')

    await card.emailImputFiled().fill(expectedEmail)    
    await card.passwordImputFiled().fill(expectedPass)

    await expect (card.emailImputFiled()).toHaveValue(expectedEmail)
    await expect (card.passwordImputFiled()).toHaveValue(expectedPass)

    await card.radioButton('Option 1').check()
    await card.radioButton('Option 2').check()
    await card.submitButton().click();
})  

test('Fill "Basic form" form', async ({ page }) => {
    await navigationPage.goToFormLayoutsPage()

    const expectedEmail = 'test@mail.com'
    const expectedPass = 'test123'
    const card = formLayoutsPage.cardByTitle('Basic form')

    await card.emailImputFiled().fill(expectedEmail)    
    await card.passwordImputFiled().fill(expectedPass)

    await expect (card.emailImputFiled()).toHaveValue(expectedEmail)
    await expect (card.passwordImputFiled()).toHaveValue(expectedPass)

    await card.selectCheckbox()
    await expect (await card.isChecked()).toBeTruthy()

    await card.unSelectCheckbox()
    await expect (await card.isChecked()).toBeFalsy()
    
    await card.submitButton().click();
}) 
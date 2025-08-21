import {expect, test} from '@playwright/test'
import { beforeEach } from 'node:test';

test.beforeEach(async ({page}) =>{
    await page.goto('https://demoapp.liquidqa.com');
});

test('check titel', async ({page}) => {
   await expect(page).toHaveTitle(/playwright-test-admin Demo Application/);
});

test('test two', async ({page}) => {
  // Click the get started link.
  await page.getByText('Forms').click();
  await page.getByText('DatePicker').click();


});
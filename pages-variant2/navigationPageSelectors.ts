import { Page, Locator } from '@playwright/test'

export class NavigationPageSelectors {

  private readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  inlineFormHeader(): Locator {
    return this.page.locator('nb-card.inline-form-card nb-card-header');
  }

  formsLocator(): Locator {
    return this.page.getByText('Forms')
  }

}



/*
    import { Page, Locator } from '@playwright/test';

export class NavigationPageSelectors {
  static getHomeButton(page: Page): Locator {
    return page.locator('button#home');
  }

  // Динамичен локатор със параметър
  static getUserProfile(page: Page, userId: string): Locator {
    return page.locator(`div#profile-${userId}`);
  }
}

*/
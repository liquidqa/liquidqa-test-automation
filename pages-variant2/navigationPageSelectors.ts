import { Page, Locator } from '@playwright/test'

export class NavigationPageSelectors {

  private readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  inlineFormHeaderLocator(): Locator {
    return this.page.locator('nb-card.inline-form-card nb-card-header');
  }

  cardHeadersLocator(): Locator {
    return this.page.locator('nb-card-header')
  }

  formsLocator(): Locator {
    return this.page.getByText('Forms')
  }

  formsLayoutsLocator(): Locator {
    return this.page.getByText('Form Layouts')
  }

  datePickerLocator(): Locator {
    return this.page.getByText('Datepicker')
  }

  modalLocator(): Locator {
    return this.page.getByText('Modal & Overlays')
  }

  tooltipLocator(): Locator {
    return this.page.getByText('Tooltip')
  }

  dialogLocator(): Locator {
    return this.page.locator('a[href*="/modal-overlays/dialog"]')
  }

  windowLocator(): Locator {
    return this.page.locator('a[href*="/modal-overlays/window"]')
  }

  popoverLocator(): Locator {
    return this.page.locator('a[href*="/modal-overlays/popover"]')
  }

  toastrLocator(): Locator {
    return this.page.locator('a[href*="/modal-overlays/toastr"]')
  }
}

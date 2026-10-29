import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly titulo: Locator;
  private readonly menuButton: Locator;
  private readonly logoutButton: Locator;
  private readonly listaProdutos: Locator;

  constructor(private page: Page) {
    this.titulo = page.getByText('Products', { exact: true });

    this.menuButton = page.locator('#react-burger-menu-btn');

    this.logoutButton = page.locator('#logout_sidebar_link');

    this.listaProdutos = page.locator('.inventory_list');
  }

  async logout(): Promise<void> {
    await this.menuButton.click();

    await this.logoutButton.waitFor({
      state: 'visible',
      timeout: 5000,
    });

    await this.logoutButton.click();
  }

  get tituloPagina(): Locator {
    return this.titulo;
  }

  get produtos(): Locator {
    return this.listaProdutos;
  }

  get urlAtual(): string {
    return this.page.url();
  }
}
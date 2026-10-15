
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Elementos da tela de login
  private get emailInput(): Locator {
    return this.page.locator('#email');
  }

  private get passwordInput(): Locator {
    return this.page.locator('#password');
  }

  private get loginButton(): Locator {
    return this.page.locator('#loginBtn');
  }

  private get errorMessage(): Locator {
    return this.page.locator('#errorMessage');
  }

  private get statusMessage(): Locator {
    return this.page.locator('#statusMessage');
  }

  // Acessa a tela de login
  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  // Preenche as credenciais e tenta entrar
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Locators disponíveis para validações externas
  get email(): Locator {
    return this.emailInput;
  }

  get password(): Locator {
    return this.passwordInput;
  }

  get loginBtn(): Locator {
    return this.loginButton;
  }

  get error(): Locator {
    return this.errorMessage;
  }

  get status(): Locator {
    return this.statusMessage;
  }
}

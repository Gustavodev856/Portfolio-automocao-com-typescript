import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async acessar(): Promise<void> {
    await this.page.goto('/');
  }

  async preencherCredenciais(
    usuario: string,
    senha: string
  ): Promise<void> {
    await this.usernameInput.fill(usuario);
    await this.passwordInput.fill(senha);
  }

  async submeterLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async fazerLogin(
    usuario: string,
    senha: string
  ): Promise<void> {
    await this.preencherCredenciais(usuario, senha);
    await this.submeterLogin();
  }

  get mensagemErro(): Locator {
    return this.errorMessage;
  }
}
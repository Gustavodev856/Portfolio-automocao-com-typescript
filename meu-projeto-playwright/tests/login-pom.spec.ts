
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('LojaQA - Login com Page Object Model', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Cenário 1: login com cliente válido', async ({ page }) => {
    await loginPage.login(
      process.env.LOJAQA_EMAIL || 'cliente@lojaqa.com',
      process.env.LOJAQA_PASSWORD || 'Cliente123!'
    );

    await expect(page).toHaveURL(/\/dashboard\/?$/);
  });

  test('Cenário 2: login com senha incorreta', async () => {
    await loginPage.login(
      'cliente@lojaqa.com',
      'SenhaIncorreta123!'
    );

    await expect(loginPage.error).toBeVisible();
  });

  test('Cenário 3: botão inicia desabilitado', async () => {
    await expect(loginPage.loginBtn).toBeDisabled();
  });
});

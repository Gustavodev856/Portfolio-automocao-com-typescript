
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type CenarioLogin = {
  nome: string;
  email: string;
  senha: string;
  sucesso: boolean;
};

const cenarios: CenarioLogin[] = [
  {
    nome: 'Cliente válido',
    email: process.env.LOJAQA_EMAIL || 'cliente@lojaqa.com',
    senha: process.env.LOJAQA_PASSWORD || 'Cliente123!',
    sucesso: true,
  },
  {
    nome: 'Administrador válido',
    email: process.env.LOJAQA_ADMIN_EMAIL || 'admin@lojaqa.com',
    senha: process.env.LOJAQA_ADMIN_PASSWORD || 'Admin123!',
    sucesso: true,
  },
  {
    nome: 'Senha incorreta',
    email: 'cliente@lojaqa.com',
    senha: 'SenhaErrada123!',
    sucesso: false,
  },
];

for (const cenario of cenarios) {
  test(`Data-driven: ${cenario.nome}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(cenario.email, cenario.senha);

    if (cenario.sucesso) {
      await expect(page).toHaveURL(/\/dashboard\/?$/);
    } else {
      await expect(loginPage.error).toBeVisible();
    }
  });
}

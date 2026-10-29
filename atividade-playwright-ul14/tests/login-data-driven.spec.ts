import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { listaUsuarios } from '../data/usuarios.data';

for (const cenario of listaUsuarios) {
  test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.acessar();

    await loginPage.fazerLogin(
      cenario.usuario,
      cenario.senha
    );

    if (cenario.sucesso) {
      await expect(page).toHaveURL(/inventory\.html/);

      await expect(
        dashboardPage.tituloPagina
      ).toBeVisible();
    } else {
      await expect(
        loginPage.mensagemErro
      ).toHaveText(cenario.mensagemEsperada);

      await expect(page).not.toHaveURL(/inventory\.html/);
    }
  });
}
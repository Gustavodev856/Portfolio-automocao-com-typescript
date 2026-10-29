import { test, expect } from '../fixtures/auth.fixture';

test.describe('Área restrita - Sessão autenticada', () => {
  test('CT - Dashboard: acessar painel autenticado', async ({
    page,
    dashboardPage,
  }) => {
    await expect(page).toHaveURL(/inventory\.html/);

    await expect(dashboardPage.tituloPagina).toBeVisible();

    await expect(dashboardPage.produtos).toBeVisible();
  });

  test('CT - Dashboard: realizar logout', async ({
    page,
    dashboardPage,
  }) => {
    await dashboardPage.logout();

    await expect(page).toHaveURL(/\/$/);

    await expect(
      page.getByPlaceholder('Username')
    ).toBeVisible();
  });
});
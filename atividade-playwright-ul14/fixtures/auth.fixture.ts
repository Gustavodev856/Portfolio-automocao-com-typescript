import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type Fixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.acessar();

    await loginPage.fazerLogin(
      'standard_user',
      'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(dashboardPage.tituloPagina).toBeVisible();

    await use(dashboardPage);
  },
});

export { expect };

import { test, expect } from '../fixtures/auth.fixture';

test('Fixture: disponibiliza o Page Object de login', async ({ loginPage }) => {
  await expect(loginPage.loginBtn).toBeDisabled();
  await expect(loginPage.email).toBeVisible();
  await expect(loginPage.password).toBeVisible();
});

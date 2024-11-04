import { test as setup } from '@playwright/test';
import { LoginPage } from "../pageobjects/login.page";

let loginPage: LoginPage;
const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

setup('login setup', async ({page }) => {
    await page.context().clearCookies();
    console.log('logging in...');
    loginPage = new LoginPage(page);
    await loginPage.login(email, password);
    await page.context().storageState({ path: ".auth/user.json" })
});
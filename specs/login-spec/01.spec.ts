import { expect, test, type Page } from "@playwright/test";
import { LoginPage } from "../../pageobjects/login.page";

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;
let loginPage: LoginPage;

test.describe("[successful Authentication] Verify user signin with email/password", () => {
    test('user login with correct credentials', async ({ page }) => {
        await page.context().clearCookies();
        loginPage = new LoginPage(page);
        await loginPage.login(email, password);
    })
})
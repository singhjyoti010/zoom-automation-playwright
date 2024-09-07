import { expect, test, type Page } from "@playwright/test";
import { LoginPage } from "../pageobjects/login.page";

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;
let loginPage: LoginPage;

test.describe("Zoom signin", () => {
    test('login', async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.login(email, password);
    })
})
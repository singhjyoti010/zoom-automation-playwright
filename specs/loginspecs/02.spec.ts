import { test } from "@playwright/test";
import { LoginPage } from "../../pageobjects/login.page";
import { helperConstants } from "../../utils/helperConstants";

const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;
let loginPage: LoginPage;

test.describe("Zoom signin", () => {
    test.beforeEach('test pre-requisites', async ({ page }) => {
        await page.context().clearCookies();
        loginPage = new LoginPage(page);
        await loginPage.gotoSignInPage();
    })

    test('Enter incorrect email format with empty password field', async ({ page }) => {
        await loginPage.checkIncorrectEmailFormat(helperConstants.incorrectEmailFormat, helperConstants.emptyFields);
        await loginPage.emptyPassword(helperConstants.incorrectEmailFormat, helperConstants.emptyFields);
    })
    test('Enter incorrect email format with non-empty password field', async ({ page }) => {
        await loginPage.checkIncorrectEmailFormat(helperConstants.incorrectEmailFormat, helperConstants.emptyFields);
    })
    test('Empty email with non-empty password field', async ({ page }) => {
        await loginPage.emptyEmail(helperConstants.emptyFields, helperConstants.incorrectPassword);
    })
    test('Incorrect email/password', async ({ page }) => {
        await loginPage.incorrectEmail(helperConstants.incorrectEmail, password);
    })
})
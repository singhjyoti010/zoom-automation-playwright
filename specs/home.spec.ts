import { test } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { LoginPage } from "../pageobjects/login.page";

let homePage: HomePage;
let loginPage: LoginPage;
const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test.beforeEach("create page context", async ({page}) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await loginPage.login(email, password);
})

test.describe('Home Page validations', () => {

    test('verify after status of pages in left nav', async ({page}) => {
        await homePage.isActiveHome();
        await homePage.isActiveProfile();
        await homePage.isActiveMeetings();
        await homePage.isActiveWebinars();
        await homePage.isActivePersonalContacts();
        await homePage.isActivePersonalDevices();
        await homePage.isActiveWhiteboards();
        await homePage.isActiveNotes();
        await homePage.isActiveRecording();
        await homePage.isActiveClip();
        await homePage.isActiveScheduler();
        await homePage.isActiveSettings();
        await page.waitForTimeout(2000);    //for test purpose
        await homePage.isActiveDataAndPrivacy();
        await homePage.isActiveReports();
    })
})
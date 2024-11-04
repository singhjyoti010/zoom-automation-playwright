import { test } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";

let homePage: HomePage;

test.beforeEach("create page context", async ({page}) => {
    homePage = new HomePage(page);
})

test.describe('Home Page validations', () => {

    test('verify after status of pages in left nav', async ({page}) => {
        // await page.goto('https://zoom.us/myhome')
        await page.goto('https://us05web.zoom.us/myhome');
        await page.waitForLoadState();
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
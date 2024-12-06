import { test } from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;

test.beforeEach("create page context", async ({browser}) => {
    const context = await browser.newContext({
        storageState: '.auth/user.json', // Use the path to your saved auth.json file
    });
    const page = await context.newPage();
    homePage = new HomePage(page);
    await page.goto('https://us05web.zoom.us/myhome');
    await page.waitForLoadState();
})

test.describe('Verify user can navigate to non-admin tiles present in left rail (Home, Profile, Meetings, Webinars, Events & Sessions, Personal Contacts, Personal Devices, Whiteboards, Notes, Docs, Recording, Clips, Scheduler, Settings, Data & Privacy, and Reports)', () => {
    test('PERSONAL -> Home', async ({page}) => {
        await page.goto('https://us05web.zoom.us/myhome');
        await page.waitForLoadState();
        await homePage.isActiveHome();
    })
    test('PERSONAL -> Profile', async ({page}) => {
        await homePage.isActiveProfile();
    })
    test('PERSONAL -> Meetings', async ({page}) => {
        await homePage.isActiveMeetings();
    })
    test('PERSONAL -> Webinars', async ({page}) => {
        await homePage.isActiveWebinars();
    })
    test('PERSONAL -> Events & Sessions', async ({page}) => {
        await homePage.isActiveEventsAndSessions();
    })
    test('PERSONAL -> Personal Contacts', async ({page}) => {
        await homePage.isActivePersonalContacts();
    })
    test('PERSONAL -> Personal Devices', async ({page}) => {
        await homePage.isActivePersonalDevices();
    })
    test('PERSONAL -> Whiteboards', async ({page}) => {
        await homePage.isActiveWhiteboards();
    })
    test('PERSONAL -> Notes', async ({page}) => {
        await homePage.isActiveNotes();
    })
    test.only('PERSONAL -> Docs', async ({page}) => {
        await homePage.docNavigation();
    })
    test('PERSONAL -> Recording', async ({page}) => {
        await homePage.isActiveRecording();
    })
    test('PERSONAL -> Clips', async ({page}) => {
        await homePage.isActiveClip();
    })
    test('PERSONAL -> Scheduler', async ({page}) => {
        await homePage.isActiveScheduler();
    })
    test('PERSONAL -> Settings', async ({page}) => {
        await homePage.isActiveSettings();
    })
    test('PERSONAL -> Data & Privacy', async ({page}) => {
        await homePage.isActiveDataAndPrivacy();
    })
    test('PERSONAL -> Reports', async ({page}) => {
        await homePage.isActiveReports();
    })
})
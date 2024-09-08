import { test } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { LoginPage } from "../pageobjects/login.page";
import path from "path";

let homePage: HomePage;
let loginPage: LoginPage;
const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test.describe('Home Page validations', () => {
    test.beforeEach("create page context", async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.login(email, password);
    })

    test('verify after click if Home page is active', async () => {
        await homePage.isActiveHome();
    })

    test('verify after click if Profile page is active', async () => {
        await homePage.isActiveProfile();
    })

    test('verify after click if Meetings page is active', async () => {
        await homePage.isActiveMeetings();
    })

    test('verify after click if Webinar page is active', async () => {
        await homePage.isActiveWebinars();
    })

    test('verify after click if Contacts page is active', async () => {
        await homePage.isActivePersonalContacts();
    })

    test('verify after click if Devices page is active', async () => {
        await homePage.isActivePersonalDevices();
    })

    test('verify after click if Whiteboards page is active', async () => {
        await homePage.isActiveWhiteboards();
    })

    test('verify after click if Notes page is active', async () => {
        await homePage.isActiveNotes();
    })

    test('verify after click if Recordings page is active', async () => {
        await homePage.isActiveRecording();
    })

    test('verify after click if Clips page is active', async () => {
        await homePage.isActiveClip();
    })

    test('verify after click if Scheduler page is active', async () => {
        await homePage.isActiveScheduler();
    })

    test('verify after click if Settings page is active', async () => {
        await homePage.isActiveSettings();
    })

    test('verify after click if Data & Privacy page is active', async () => {
        await homePage.isActiveDataAndPrivacy();
    })

    test('verify after click if Reports page is active', async () => {
        await homePage.isActiveReports();
    })

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status === 'failed') {
          // Define the path where the screenshot will be saved
          const screenshotPath = path.join('screenshots', `${testInfo.title.replace(/\s+/g, '_')}-${new Date().toISOString()}.png`);
          
          // Create the screenshots directory if it doesn't exist
        //   if (!fs.existsSync('screenshots')) {
        //     fs.mkdirSync('screenshots');
        //   }
          
          // Capture and save the screenshot
          await page.screenshot({ path: screenshotPath });
          
          // Optionally, you can log the path of the screenshot
          console.log(`Screenshot saved at ${screenshotPath}`);
        }
    });
})
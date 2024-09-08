import { test } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { LoginPage } from "../pageobjects/login.page";

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

    test('verify after status of pages in left nav', async () => {
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
        await homePage.isActiveDataAndPrivacy();
        await homePage.isActiveReports();
    })
    // test.afterEach(async ({ page }, testInfo) => {
    //     if (testInfo.status === 'failed') {
    //       // Define the path where the screenshot will be saved
    //       const screenshotPath = path.join('screenshots', `${testInfo.title.replace(/\s+/g, '_')}-${new Date().toISOString()}.png`);
          
    //       // Create the screenshots directory if it doesn't exist
    //     //   if (!fs.existsSync('screenshots')) {
    //     //     fs.mkdirSync('screenshots');
    //     //   }
          
    //       // Capture and save the screenshot
    //       await page.screenshot({ path: screenshotPath });
          
    //       // Optionally, you can log the path of the screenshot
    //       console.log(`Screenshot saved at ${screenshotPath}`);
    //     }
    // });
})
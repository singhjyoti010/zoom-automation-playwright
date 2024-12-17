import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;

test.describe("[Zoom-Home] Your Activity Default view, verify if no activity is performed, every tile details should have Learn more and Create [Activity_Name] button present along with Visit [Activity_Name] link.", () => {
    test.beforeEach("initial setup", async ({page}) => {
        homePage = new HomePage(page);
        await page.goto('https://us05web.zoom.us/myhome');
        await page.waitForLoadState();
    })
    test("Activity default view", async () => {
        await homePage.activityCardDefaultView();
    })
})
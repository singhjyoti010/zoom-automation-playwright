import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;
let page;
let context;

test.describe("[Zoom-Home] Your Activity Default view, verify if no activity is performed, every tile details should have Learn more and Create [Activity_Name] button present along with Visit [Activity_Name] link.", () => {
    test.beforeAll("initial setup", async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        await page.goto('https://us05web.zoom.us/myhome');
        await page.waitForLoadState();
    })
    test("Activity default view", async () => {
        await homePage.activityCardDefaultView();
    })
})
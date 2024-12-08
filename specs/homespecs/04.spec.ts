import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage : HomePage;

test.describe("Verify left rail section", () => {
    test("count of sections should be 2 and bottom card should have 3 links", async ({page}) => {
        homePage = new HomePage(page);
        await page.goto('https://us05web.zoom.us/myhome');
        await page.waitForLoadState();
        await homePage.leftRailSectionCount();
        await homePage.leftRailLinksCount();
    })
})
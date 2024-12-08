import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;

test.describe("[Zoom-Home] User info card (Username, current plan, Job title, Iincluded in plan, etc)", () => {
    test("user info card test", async ({page}) => {
        homePage = new HomePage(page);
        await page.goto('https://us05web.zoom.us/myhome');
        await homePage.profileCardCheck();
        await homePage.clickManagePlans();
        await page.goBack();
        await homePage.clickViewPlanDetails();
    })
})
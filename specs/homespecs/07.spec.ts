import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;

test.describe("[Zoom-Home] Your Activity", ()=>{
    test("Activity card, check if three section shows and toggle works", async ({page}) => {
        homePage = new HomePage(page);
        await homePage.activityCardCheck();
    })
})
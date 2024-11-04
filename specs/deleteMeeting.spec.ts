import {test} from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { ScheduleMeetingPage } from "../pageobjects/schedule.page";

let homePage : HomePage;
let scheduleMeetingPage : ScheduleMeetingPage;

test.beforeEach("initial setup", async function ({page}) {
    homePage = new HomePage(page);
    scheduleMeetingPage = new ScheduleMeetingPage(page);
    await page.goto('https://us05web.zoom.us/myhome');
    await homePage.isActiveMeetings();
})

test.describe("delete meeting if created", async () =>{
    test("delete already created meetings, if present", async () => {
        await scheduleMeetingPage.deleteMeeting();
    })
})

import { test } from "@playwright/test";
import { HomePage } from "../pageobjects/home.page";
import { ScheduleMeetingPage } from "../pageobjects/schedule.page";

let homePage: HomePage;
let scheduleMeeting: ScheduleMeetingPage;

test.beforeEach("", async ({page, request}) => {
    // let response = request.post("url", {data:{"name": "kumar", "age": 12}, headers:{"Accept": "Application/json"}})

    homePage = new HomePage(page);
    scheduleMeeting = new ScheduleMeetingPage(page);
    await page.goto('https://us05web.zoom.us/myhome');
    await homePage.isActiveMeetings();
})

test.describe("Schedule Meeting test", () => {
    test("verifying meeting creation", async () =>{
        await scheduleMeeting.createMeeting("Test meeting");
    })
})
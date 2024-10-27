import { test } from "@playwright/test";
import { LoginPage } from "../pageobjects/login.page";
import { HomePage } from "../pageobjects/home.page";
import { ScheduleMeetingPage } from "../pageobjects/schedule.page";

let loginPage: LoginPage;
let homePage: HomePage;
let scheduleMeeting: ScheduleMeetingPage;
const email = process.env.USER_EMAIL!;
const password = process.env.USER_PASSWORD!;

test.beforeEach("", async ({page}) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    scheduleMeeting = new ScheduleMeetingPage(page);
    await loginPage.login(email, password);
    await homePage.isActiveMeetings();
})

test.describe("Schedule Meeting test", () => {

    test("verifying meeting creation", async () =>{
        await scheduleMeeting.createMeeting("Test meeting");
    })
})
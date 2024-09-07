import { expect, test } from "@playwright/test";

test("signin into Zoom", async ({page}) => {
    //Go to https://zoom.us/signin
    await page.goto('/signin');
    await expect(page).toHaveTitle(/Sign In/);

    //
})
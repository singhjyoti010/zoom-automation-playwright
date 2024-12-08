import test from "@playwright/test";
import { HomePage } from "../../pageobjects/home.page";

let homePage: HomePage;

test.describe("[Zoom-Home] Discover our other popular products", ()=>{
    test("", async ({page}) => {
        homePage = new HomePage(page);
        await homePage.discoverProducts();
    })
})
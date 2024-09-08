import { type Page, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    /******************************** helper locators ****************************************/

    public get emailInputField() {
        return this.page.locator('#email');
    }

    public get passwordInputField() {
        return this.page.locator('#password');
    }

    public get signinButton() {
        return this.page.locator('#js_btn_login');
    }

    public get bannerCloseButton() {
        return this.page.locator('.banner-close-button');
    }

    public get preferenceButton() {
        return this.page.locator('.ot-floating-button__open');
    }

    
    /******************************** helper methods ****************************************/

    /**
     * 
     * @param email user email
     * @param password user password
    */
    public async login(email: string, password: string) {
        //go to zoom signin page
        await this.page.goto('/signin');
        
        //verify page title
        await expect(this.page).toHaveTitle(/Sign In/);

        //wait for cookies banner to appear
        await this.bannerCloseButton.waitFor({state: "visible", timeout: 40000});
        await this.bannerCloseButton.click();

        //fill email field
        await this.emailInputField.type(email, { delay: 100 });

        //fill password field
        await this.passwordInputField.type(password, { delay: 100 });

        //wait for preference button to appear
        await this.preferenceButton.waitFor({state:"visible"});

        //click signin button
        await this.signinButton.click();

        //wait for user name post login
        await this.page.waitForSelector('//h3[contains(text(),"Emma Grace")]', { state: 'visible', timeout: 80000 });
    }
}
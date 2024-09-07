import { type Page, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

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

    constructor(page: Page) {
        this.page = page
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
        
        //fill email field
        await this.emailInputField.fill(email);

        //fill password field
        await this.passwordInputField.fill(password);

        //click signin button
        await this.signinButton.click();
    }
}
import { Locator, type Page, expect } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    emailInputFld: string;

    constructor(page: Page) {
        this.page = page
        this.emailInputFld = "#email";
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

    public get emptyEmailMessage() {
        return this.page.locator('//*[contains(@aria-label,"Please enter your email address")]')
    }

    public get inocrrectEmailFormatMessage() {
        return this.page.locator('//*[contains(@aria-label,"Please enter a valid email address.")]');
    }

    public get incorrectEmailPasswordMsg() {
        return this.page.locator('//*[contains(@class,"zm-alert--error")]//p[contains(text(),"Incorrect email or password")]');
    }

    public get emptyPasswordMessage() {
        return this.page.locator('//*[contains(@aria-label,"Please enter your password")]');
    }

    
    /******************************** helper methods ****************************************/

    /**
     * 
     * @param email user email
     * @param password user password
    */
    public async gotoSignInPage(){
        //go to zoom signin page
        await this.page.goto('https://zoom.us/signin');
        await this.page.waitForLoadState();
        await this.page.waitForTimeout(5000);
        //verify page title
        await expect(this.page).toHaveTitle(/Sign In/);
        //wait for cookies banner to appear
        await this.bannerCloseButton.waitFor({state: "visible", timeout: 40000});
        await this.bannerCloseButton.click();
    }

    public async enterEmailPass(email: string, password: string) {
        //fill email field
        await this.emailInputField.clear();
        await this.page.locator(this.emailInputFld).type(email);
        // await this.emailInputField.type(email);
        //fill password field
        await this.passwordInputField.clear();
        await this.passwordInputField.type(password);
    }

    public async login(email: string, password: string) {
        await this.gotoSignInPage();
        await this.enterEmailPass(email, password);

        // //wait for preference button to appear
        // await this.preferenceButton.waitFor({state:"visible", timeout: 30000});

        //click signin button
        await this.page.keyboard.down('Enter');
        await this.page.keyboard.up('Enter');
        // await this.signinButton.click();
        await this.page.waitForTimeout(5000);
        if(await this.page.isVisible('.zm-message__content', {timeout: 10000})){
            // await setTimeout(()=>{},50000);
            await this.page.reload();
            await this.page.waitForTimeout(5000);
            await this.enterEmailPass(email, password);
            await this.page.waitForTimeout(5000);
            await this.signinButton.click();
        } else{
            //await this.signinButton.click();
        }

        //wait for user name post login
        await this.page.waitForSelector('//h3[contains(text(),"Emma Grace")]', { state: 'visible', timeout: 80000 });
    }
    async emptyEmail(email: string, password: string) {
        // await this.gotoSignInPage();
        await this.enterEmailPass(email,password);
        await this.signinButton.click();
        await expect(this.emptyEmailMessage).toBeVisible();
        await expect(this.emptyEmailMessage).toContainText('Please enter your email address');
    }
    async checkIncorrectEmailFormat(email: string, password: string){
        // await this.gotoSignInPage();
        await this.enterEmailPass(email,password);
        await this.signinButton.click();
        await expect(this.inocrrectEmailFormatMessage).toBeVisible();
        await expect(this.inocrrectEmailFormatMessage).toContainText('Please enter a valid email address.');
    }
    async incorrectEmail(email: string, password: string){
        await this.enterEmailPass(email,password);
        await this.signinButton.click();
        await expect(this.incorrectEmailPasswordMsg).toBeVisible();
        await expect(this.incorrectEmailPasswordMsg).toContainText('Incorrect email or password');
    }
    async emptyPassword(email: string, password: string) {
        await this.enterEmailPass(email,password);
        await this.signinButton.click();
        await expect(this.emptyPasswordMessage).toBeVisible();
        await expect(this.emptyPasswordMessage).toContainText('Please enter your password');
    }
}
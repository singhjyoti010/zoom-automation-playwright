import { type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page){
        this.page = page;
    }

    get leftNavElementHome() {
        return this.page.locator('.menuitem-home_destination');
    }

    get leftNavElementProfile() {
        return this.page.locator('[tracking-id="leftNavProfile"]');
    }

    get leftNavElementMeetings() {
        return this.page.locator('[tracking-id="leftNavMeetings"]');
    }

    get leftNavElementWebinars() {
        return this.page.locator('[tracking-id="leftNavWebinarIS"]');
    }

    get leftNavElementPersonalContacts() {
        return this.page.locator('[tracking-id="leftNavPersinalContact"]');
    }

    get leftNavElementPersonalDevices() {
        return this.page.locator('[tracking-id="leftNavPersinalDevices"]');
    }    

    get leftNavElementWhiteboards() {
        return this.page.locator('[tracking-id="leftNavWhiteboard"]');
    }

    get leftNavElementNotes() {
        return this.page.locator('[tracking-id="leftNavNotes"]');
    }

    get leftNavElementDocs() {
        return this.page.locator('[tracking-id="leftNavDoc]');
    }

    get leftNavElementRecording() {
        return this.page.locator('[tracking-id="leftNavRecording"]');
    }

    get leftNavElementClips() {
        return this.page.locator('[tracking-id="leftNavMarvel"]');
    }

    get leftNavElementScheduler() {
        return this.page.locator('[tracking-id="leftNavAccountSettings"]');
    }

    get leftNavElementSettings() {
        return this.page.locator('[tracking-id="leftNavSettings"]');
    }

    get leftNavElementDataAndPrivacy() {
        return this.page.locator('//*[@tracking-id="leftNavPrivacy" and @tracking-category="NavPersonal"]');
    }

    get leftNavElementReports() {
        return this.page.locator('[tracking-id="leftNavReports"]');
    }

    /******************************** widget locators ****************************************/
    get scheduleWidget() {
        return this.page.locator('//*[contains(text(),"Schedule")]/ancestor::a');
    }

    get joinWidget() {
        return this.page.locator('//*[contains(text(),"Join")]/ancestor::a');
    }

    get hostWidget() {
        return this.page.locator('//*[contains(text(),"Host")]/ancestor::a');
    }


    /******************************** helper methods ****************************************/
    /******************************** Left nav methods ***************************************/

    public async isActiveHome(){
        // await this.leftNavElementHome.click();
        await expect(this.leftNavElementHome).toHaveAttribute('aria-current');
    }

    public async isActiveProfile() {
        await this.leftNavElementProfile.click();
        await expect(this.leftNavElementProfile).toHaveAttribute('aria-current');
    }

    public async isActiveMeetings() {
        await this.leftNavElementMeetings.click();
        await expect(this.leftNavElementMeetings).toHaveAttribute('aria-current');
    }

    public async isActiveWebinars() {
        await this.leftNavElementWebinars.click();
        await expect(this.leftNavElementWebinars).toHaveAttribute('aria-current');
    }
    
    public async isActivePersonalContacts() {
        await this.leftNavElementPersonalContacts.click();
        await expect(this.leftNavElementPersonalContacts).toHaveAttribute('aria-current');
    }

    public async isActivePersonalDevices() {
        await this.leftNavElementPersonalDevices.click();
        await expect(this.leftNavElementPersonalDevices).toHaveAttribute('aria-current');
    }

    public async isActiveWhiteboards() {
        await this.leftNavElementWhiteboards.click();
        await expect(this.leftNavElementWhiteboards).toHaveAttribute('aria-current');
    }

    public async isActiveNotes() {
        await this.leftNavElementNotes.click();
        await expect(this.leftNavElementNotes).toHaveAttribute('aria-current');
    }

    public async isActiveRecording() {
        await this.leftNavElementRecording.click();
        await expect(this.leftNavElementRecording).toHaveAttribute('aria-current');
    }

    public async isActiveClip() {
        await this.leftNavElementClips.click();
        await expect(this.leftNavElementClips).toHaveAttribute('aria-current');
    }

    public async isActiveScheduler() {
        await this.leftNavElementScheduler.click();
        await expect(this.leftNavElementScheduler).toHaveAttribute('aria-current');
    }

    public async isActiveSettings() {
        await this.leftNavElementSettings.click();
        await expect(this.leftNavElementSettings).toHaveAttribute('aria-current');
    }

    public async isActiveDataAndPrivacy() {
        await this.leftNavElementDataAndPrivacy.scrollIntoViewIfNeeded();
        await (await this.leftNavElementDataAndPrivacy).first().click();
        await expect(this.leftNavElementDataAndPrivacy.first()).toHaveAttribute('aria-current');
    }

    public async isActiveReports() {
        await this.leftNavElementReports.first().scrollIntoViewIfNeeded();
        await this.leftNavElementReports.first().click();
        await expect(this.leftNavElementReports.first()).toHaveAttribute('aria-current');
    }

    /******************************** right section methods ****************************************/
    public async clickSchduleWidget() {
        await (await this.scheduleWidget).click();
    }
}

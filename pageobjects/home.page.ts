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

    get leftNavElEventsAndSessions() {
        return this.page.locator('[tracking-id="leftNavEvent"]');
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
        return this.page.locator('[tracking-id="leftNavDoc"]');
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

    get leftNavSections() {
        return this.page.locator('//*[contains(@class,"side-nav-title")]');
    }

    get leftNavLinksHolder(){
        return this.page.locator('.zm-sidenav-alert');
    }

    get leftNavLinks(){
        return this.page.locator('.zm-sidenav-alert p a');
    }

    get leftNavAdminPlanManagement(){
        return this.page.locator('//a[@tracking-id="leftNavUsers" and contains(text(),"Plan Management")]');
    }

    /******************************** mid section locators ****************************************/
    get profileCard() {
        return this.page.locator('div[type="PROFILE"]');
    }

    get profilePic() {
        return this.page.locator('//*[contains(@class,"profile_picture")]');
    }

    get userName() {
        return this.page.locator('//*[contains(@class,"profile_details")]/h3');
    }

    get currPlan() {
        return this.page.locator('//*[contains(@class,"account-status")]');
    }

    get jobTitle() {
        return this.page.locator('//*[contains(@class,"profile-job-title_value")]');
    }

    get managePlanBtn() {
        return this.page.locator('//*[contains(@class,"profile-cta-inner")]/button');
    }

    get currentPlanDetails() {
        return this.page.locator('//*[contains(@class,"plans_wrapper")]');
    }

    get viewPlanDetailsLink() {
        return this.page.locator('//*[contains(text(),"View Plan")]/ancestor::a');
    }

    get planDetailsDialog() {
        return this.page.locator('//*[contains(@class,"pro_detail_dialog")]');
    }

    get viewAllPlansLink() {
        return this.page.locator('//*[contains(@class,"pro_detail_footer")]/button[contains(@class,"tertiary")]');
    }

    get upgradeNowLink() {
        return this.page.locator('//*[contains(@class,"pro_detail_footer")]/button[contains(@class,"primary")]');
    }

    get ActivityCard() {
        return this.page.locator('div[type="ACTIVITY"]');
    }

    get ActivityCardSections () {
        return this.page.$$('//div[@type="ACTIVITY"]//section/div/section');
    }

    get ActivityCardSectionToggle(){
        return this.page.locator('//div[contains(@id,"trigger")]');
    }

    get visitDocsInActivityCard () {
        return this.page.locator('//*[contains(text(),"Visit Docs")]/ancestor::a');
    }

    get createBtnActivityCard() {
        return this.page.locator('//*[contains(@id,"region-ACTIVITY")]//button[contains(@class,"primary")]');
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

    public async isActiveEventsAndSessions() {
        await this.leftNavElEventsAndSessions.click();
        await expect(this.leftNavElEventsAndSessions).toHaveAttribute('aria-current');
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

    public async docNavigation(){
        await this.leftNavElementDocs.first().scrollIntoViewIfNeeded();
        const [newTab] = await Promise.all([
            this.page.waitForEvent('popup'),
            await this.leftNavElementDocs.first().click() 
        ])
        await newTab.waitForLoadState();
        await expect(newTab.locator('//*[contains(text(), "My docs")]')).toBeVisible();
        await newTab.close();
    }

    async leftRailSectionCount() {
        await this.isActiveHome();
        await this.leftNavSections.first().isVisible();
        let elements = this.leftNavSections;
        let textArr = ["PERSONAL","ADMIN"]
        await expect(elements).toHaveCount(2);
        for(let i = 0; i < await elements.count(); i++ ) {
            const elText = await elements.nth(i).innerText();
            await expect(elText).toBe(textArr[i])
        }
    }

    async leftRailLinksCount() {
        await this.isActiveHome();
        await this.leftNavLinksHolder.isVisible();
        await expect(this.leftNavLinks).toHaveCount(3);
        let elements = await this.leftNavLinks;
        let arr=["Zoom Learning Center","Video Tutorials","Knowledge Base"];
        for(let i = 0; i <await elements.count(); i++){
            await expect(await elements.nth(i).innerText()).toBe(arr[i]);
        }
    }

    async isActivePlanManagement(){
        await this.leftNavAdminPlanManagement.scrollIntoViewIfNeeded();
        await this.leftNavAdminPlanManagement.click();
        await expect(this.leftNavAdminPlanManagement).toHaveAttribute('aria-current');
    }

    /******************************** main section methods ****************************************/
    async profileCardCheck() {
        await this.isActiveHome();
        await expect(this.profileCard).toBeVisible();
        await this.profilePic.isVisible();
        await this.userName.isVisible();
        await this.currPlan.isVisible();
        await this.jobTitle.isVisible();
        await this.managePlanBtn.isVisible();
        await this.currentPlanDetails.isVisible();
    }

    async clickManagePlans() {
        await this.managePlanBtn.click();
        await this.isActivePlanManagement();
    }

    async clickViewPlanDetails() {
        await this.viewPlanDetailsLink.click();
        await expect(this.planDetailsDialog).toBeVisible();
        await expect(this.viewAllPlansLink).toBeVisible();
        await expect(this.upgradeNowLink).toBeVisible();
    }

    async activityCardCheck() {
        await this.isActiveHome();
        await this.ActivityCard.isVisible();
        await expect(this.ActivityCardSections).toHaveLength(3);
        let attr = await (await this.ActivityCardSectionToggle.first()).getAttribute("aria-expanded");
        await this.ActivityCardSectionToggle.first().click();
        expect(await (await this.ActivityCardSectionToggle.first()).getAttribute("aria-expanded")).not.toBe(attr);
    }

    async activityCardDefaultView() {
        await this.isActiveHome();
        await this.visitDocsInActivityCard.isVisible();
        await this.createBtnActivityCard.isVisible();
    }

    async discoverProducts() {
        await this.isActiveHome();
        await this.page.locator('[type="UPSELL"]').isVisible();
        await expect(this.page.locator('//*[contains(@type,"UPSELL")]//*[contains(@class,"card-container")]')).toHaveCount(3);
        await expect(this.page.locator('//*[contains(@type,"UPSELL")]//*[contains(@class,"link_container")]/a')).toBeVisible();
        await this.page.locator('//*[contains(@type,"UPSELL")]//*[contains(@class,"link_container")]/a').click();
        await expect(this.page.locator('//*[contains(@type,"UPSELL")]//*[contains(@class,"card-container")]')).toHaveCount(4);
    }

    /******************************** right section methods ****************************************/
    public async clickSchduleWidget() {
        await (await this.scheduleWidget).click();
    }
}

import { expect, Locator, type Page } from "@playwright/test";

export class ScheduleMeetingPage {
    readonly page: Page;
    readonly scheduleMeetingNotBtn: Locator;
    readonly meetingDetail: Locator;
    readonly deleteMeetingBtn: Locator;
    readonly confirmDelete: Locator;

    constructor(page){
        this.page = page;
        this.scheduleMeetingNotBtn = this.page.locator('//*[contains(text(), "Schedule a Meeting")]/parent::a');
        //delete meeting locators
        this.meetingDetail = this.page.locator('.has-detail').first();
        this.deleteMeetingBtn = this.page.locator('.meeting-delete').first();
        // this.confirmDelete = this.page.locator("//*[contains(text(),'Delete')]//parent::button[contains(@class,'meeting-delete')]");
        this.confirmDelete = this.page.getByRole('button', { name: 'Delete', exact: true });
    }

    get scheduleMeetingBtn() {
        return this.page.locator('//*[contains(text(), "Schedule a Meeting")]/parent::button');
    }

    get backToMeetingsLink() {
        return this.page.locator('//*[contains(text(),"Back to Meetings")]/parent::a');
    }

    get meetingTitle() {
        return this.page.locator('#topic');
    }

    get personalMeetingIdCheckBox() {
        return '//*[contains(text(),"Personal Meeting ID")]//ancestor::span//input';
    }

    get saveBtn() {
        return this.page.locator('.save-btn');
    }


    /******************************** helper methods ****************************************/

    public async createMeeting(title) {
        if(await this.scheduleMeetingNotBtn.isVisible({timeout: 10000})){
            await this.scheduleMeetingNotBtn.click();
        } else {
            await this.scheduleMeetingBtn.click();
        }
        await expect(this.backToMeetingsLink).toBeVisible();
        await this.meetingTitle.fill(title);
        await this.page.locator('label').filter({ hasText: 'Personal Meeting ID 460 460' }).locator('span').first().click();
        // await this.page.click(this.personalMeetingIdCheckBox);
        await this.page.getByRole('button', { name: 'Save' }).click();
        // await this.saveBtn.click();
    }

    public async deleteMeeting() {
        try{
            await expect(this.scheduleMeetingNotBtn).toBeVisible();
            await this.meetingDetail.hover();
            // await this.page.on('dialog', async (dialog)=>{
            //     await dialog.accept();
            // })
            await this.deleteMeetingBtn.click();
            await this.confirmDelete.click();
        }
        catch(e) {
            console.log("no meeting to delete", e);
        }
    }
}
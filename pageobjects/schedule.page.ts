import { expect, Locator, type Page } from "@playwright/test";

export class ScheduleMeetingPage {
    readonly page: Page;
    readonly scheduleMeetingNotBtn: Locator;

    constructor(page){
        this.page = page;
        this.scheduleMeetingNotBtn = this.page.locator('//*[contains(text(), "Schedule a Meeting")]/parent::a');
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
        if(await this.scheduleMeetingNotBtn.isVisible()){
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
}
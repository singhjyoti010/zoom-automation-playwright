import { expect, type Page } from "@playwright/test";

export class ScheduleMeetingPage {
    readonly page: Page;

    constructor(page){
        this.page = page;
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
        await this.scheduleMeetingBtn.click();
        await expect(this.backToMeetingsLink).toBeVisible();
        await this.meetingTitle.fill(title);
        await this.page.check(this.personalMeetingIdCheckBox);
        await this.saveBtn.click();
    }
}
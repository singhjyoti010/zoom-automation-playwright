import { type Page } from "@playwright/test";

export class ScheduleMeeting {
    readonly page: Page;

    constructor(page){
        this.page = page;
    }
}
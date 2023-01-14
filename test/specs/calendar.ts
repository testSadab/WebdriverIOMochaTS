import calendarPage from "../pageobjects/calendar.page";

describe('feature: handle calendar', () => {

    beforeEach("OpenApp", async()=> {
        await browser.url("https://www.globalsqa.com/demo-site/datepicker/");
        await browser.maximizeWindow();
    })

    it.skip('should handle simple date picker', async () => {
        await calendarPage.clickOnSimpleDatePickerTab();
        await browser.switchToFrame(await calendarPage.iframeSimpleDate)
        await calendarPage.datePickerInput.setValue("01/19/2023");
        await browser.switchToParentFrame();
    });

    it('should handle dropdown date picker', async () => {
        await calendarPage.clickOnDropdownDatePickerTab();

        const day=12,  month = "Mar", year = 2020;

        await browser.switchToFrame(await calendarPage.iframeDropdownDate);
        await calendarPage.datePickerInput.click();
        await calendarPage.selectDropdownDate(day, month, year);
        await browser.switchToParentFrame();
    });
});
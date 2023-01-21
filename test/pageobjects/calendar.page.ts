class CalendarPage {

    private get simpleDatePickerTab() { return $("//*[@id='Simple Date Picker']") }
    get iframeSimpleDate() { return $("//iframe[contains(@data-src, 'datepicker/default')]") }
    get datePickerInput() { return $("#datepicker") }

    private get dropdownDatePickerTab() { return $("//*[@id='DropDown DatePicker']") }
    get iframeDropdownDate() { return $("//iframe[contains(@data-src, 'datepicker/dropdown-month-year')]") }
    private get selectMonth() { return $("[data-handler=selectMonth]") }
    private get selectYear() { return $("[data-handler=selectYear]") }
    private selectDay = (day: number) => $(`//*[@id='ui-datepicker-div']//table//td[@data-handler='selectDay']/a[text()='${day}']`);

    private get iconTriggerDatePickerTab() { return $("//*[@id='Icon Trigger']") }
    get iframeTriggerDate() { return $("//iframe[contains(@data-src,'icon-trigger')]") }
    private get datePickerCalendarIcon() { return $(".ui-datepicker-trigger") }
    private get monthDatePicker() { return $(".ui-datepicker-month") }
    private get yearDatePicker() { return $(".ui-datepicker-year") }
    private get prevIcon() { return $("//a[@title='Prev']") }
    private get nextIcon() { return $("//a[@title='Next']") }

    async clickOnSimpleDatePickerTab() {
        await this.simpleDatePickerTab.click();
    }

    async clickOnDropdownDatePickerTab() {
        await this.dropdownDatePickerTab.click();
    }

    async clickOnIconTriggerDatePickerTab() {
        await this.iconTriggerDatePickerTab.click();
    }

    async selectDropdownDate(day: number, month: string, year: number) {
        await this.selectMonth.selectByVisibleText(month);
        await this.selectYear.selectByVisibleText(year);
        await this.selectDay(day).click()
    }

    private async getActualDateValue() {
        const actualMonth = await this.monthDatePicker.getText();
        const actualYear = await this.yearDatePicker.getText();
        const actualMonthInNumber = new Date(`${actualMonth}, 2012`).getMonth() + 1;
        const actualYearInNumber = Number(actualYear);
        const actualDateValue = new Date(actualYearInNumber, actualMonthInNumber).valueOf();
        return actualDateValue;
    }

    private getExpectedDateValue(month: string, year: number) {
        const expectedMonthInNumber = new Date(`${month}, 2012`).getMonth() + 1;
        const expectedDateValue = new Date(year, expectedMonthInNumber).valueOf();
        return expectedDateValue;
    }

    private async navigateToMatchingDateGrid(month: string, year: number) {
        while (await this.getActualDateValue() !== this.getExpectedDateValue(month, year)) {
            if (await this.getActualDateValue() > this.getExpectedDateValue(month, year)) {
                await this.prevIcon.waitForClickable();
                await this.prevIcon.click();
            } else if (await this.getActualDateValue() < this.getExpectedDateValue(month, year)) {
                await this.nextIcon.waitForClickable();
                await this.nextIcon.click();
            }
        }
    }

    async selectDateFromIconTrigger(day: number, month: string, year: number) {
        await this.datePickerCalendarIcon.waitForClickable();
        await this.datePickerCalendarIcon.click();
        await this.navigateToMatchingDateGrid(month, year)
        await this.selectDay(day).click();
    }
}
export default new CalendarPage();
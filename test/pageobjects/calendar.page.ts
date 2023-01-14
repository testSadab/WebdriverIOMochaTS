class CalendarPage {

    private get simpleDatePickerTab() {  return $("//*[@id='Simple Date Picker']")}

    get iframeSimpleDate() {return $("//iframe[contains(@data-src, 'datepicker/default')]")}

    get datePickerInput() {return $("#datepicker")}


    private get dropdownDatePickerTab()  { return $("//*[@id='DropDown DatePicker']")}
    get iframeDropdownDate() {return $("//iframe[contains(@data-src, 'datepicker/dropdown-month-year')]")}
    private get selectMonth() {return $("[data-handler=selectMonth]")}
    private get selectYear() { return $("[data-handler=selectYear]")}
    private selectDay = (day: number) =>  $(`//*[@id='ui-datepicker-div']//table//td[@data-handler='selectDay']/a[text()='${day}']`);

    async clickOnSimpleDatePickerTab() {
        await this.simpleDatePickerTab.click();
    }

    async clickOnDropdownDatePickerTab() {
        await this.dropdownDatePickerTab.click();
    }

    async selectDropdownDate(day: number, month:string, year: number) {
        await this.selectMonth.selectByVisibleText(month);
        await this.selectYear.selectByVisibleText(year);
        await this.selectDay(day).click()
    }

}
export default new CalendarPage();
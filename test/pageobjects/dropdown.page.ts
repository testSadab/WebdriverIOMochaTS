class DropdownPage {

    get skillsDropdown() { return $("#Skills") };

    private get countryContainer() { return $("//span[@aria-labelledby='select2-country-container']") }
    private get searchInput() { return $("//input[@type='search']") }
    private get passwordInput() { return $("#firstpassword") }

    async selectCountry(countryName: string) {
        const countryElement = $(`//*[@id='select2-country-results']/li[text()='${countryName}']`);
        await this.passwordInput.scrollIntoView();
        await this.countryContainer.click();
        await this.searchInput.setValue(countryName);
        await countryElement.click();
    }

}
export default new DropdownPage();
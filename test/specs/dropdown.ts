import dropdownPage from "../pageobjects/dropdown.page";

describe('feature: handle dropdown', () => {

    beforeEach("Open App", async () => {
        await browser.url("https://demo.automationtesting.in/Register.html");
        await browser.maximizeWindow();
    })

    it('should select dropdown by text', async () => {
        await dropdownPage.skillsDropdown.selectByVisibleText("Adobe InDesign");
    });

    it('should select dropdown by index', async () => {
        await dropdownPage.skillsDropdown.selectByIndex(3);
    });

    it('should select dropdown by attribute', async () => {
        await dropdownPage.skillsDropdown.selectByAttribute("value", "Android");
    });

    it.only("should select dropdown value without select tag", async () => {
        await dropdownPage.selectCountry("India");
    })
});
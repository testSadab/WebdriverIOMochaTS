import logindata from "../data/login.json";
import sauceLoginPage from "../pageobjects/sauce.login.page";

describe("Sauce demo app login", () => {

    beforeEach("Open App", async () => {
        await sauceLoginPage.openApp();
    })

    it("should login with valid standard user", async () => {
        await sauceLoginPage.performLogin(logindata.valid.username, logindata.valid.password);
        await expect(sauceLoginPage.productTitle).toBeDisplayed();
    })

    it("should not login with invalid user", async () => {
        await sauceLoginPage.performLogin(logindata.invalid.username, logindata.invalid.password);
        await expect(sauceLoginPage.productTitle).not.toBeDisplayed();
    })

    it("should login with valid standard user", async () => {
        await sauceLoginPage.userNameTextBox.setValue(logindata.valid.username);
        console.log("User Name with set value: ", await sauceLoginPage.userNameTextBox.getValue());

        await sauceLoginPage.userNameTextBox.addValue("OneMoreUser");
        console.log("User Name with add value: ", await sauceLoginPage.userNameTextBox.getValue());

        await sauceLoginPage.userNameTextBox.clearValue();
        console.log("User Name with clear value: ", await sauceLoginPage.userNameTextBox.getValue());
    })

    it('should fetch element text', async () => {
        const headerText = await sauceLoginPage.userHeader.getText();
        console.log(headerText);
        await expect(sauceLoginPage.userHeader).toHaveText("Accepted usernames are:")

        const loginClassValue = await sauceLoginPage.loginAreaElement.getAttribute("class");
        console.log(loginClassValue);
        await expect(sauceLoginPage.loginAreaElement).toHaveAttribute("class", "login_credentials");
    });

})
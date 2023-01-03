describe("Sauce demo app login", ()=> {

    it("should login with valid standard user",  async ()=> {

        await browser.url("https://www.saucedemo.com/");

        const userNameTextBox = $("#user-name");
        const passwordTextBox = $("#password");
        const loginButton = $("#login-button");

        await userNameTextBox.setValue("standard_user");
        await passwordTextBox.setValue("secret_sauce");
        await loginButton.click();

        const productTitle = $(".title");
        await expect(productTitle).toBeDisplayed();
    })

})
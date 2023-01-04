describe("Sauce demo app login", ()=> {

    beforeEach("Open App", async ()=> {
        await browser.url("https://www.saucedemo.com/");
        await browser.maximizeWindow();
    })

    it("should login with valid standard user",  async ()=> {
        const userNameTextBox = $("#user-name");
        const passwordTextBox = $("#password");
        const loginButton = $("#login-button");

        await userNameTextBox.setValue("standard_user");
        await passwordTextBox.setValue("secret_sauce");
        await loginButton.click();

        const productTitle = $(".title");
        await expect(productTitle).toBeDisplayed();
    })

    it("should login with valid standard user",  async ()=> {
        const userNameTextBox = $("#user-name");
        await userNameTextBox.setValue("standard_user");
        console.log("User Name with set value: ", await userNameTextBox.getValue());

        await userNameTextBox.addValue("OneMoreUser");
        console.log("User Name with add value: ", await userNameTextBox.getValue());

        await userNameTextBox.clearValue();
        console.log("User Name with clear value: ", await userNameTextBox.getValue());
    })

    it('should fetch element text', async () => {
        const userHeader = $("#login_credentials >h4");
        const headerText = await userHeader.getText();
        console.log(headerText);
        await expect(userHeader).toHaveText("Accepted usernames are:")
        
        const loginAreaElement = $("#login_credentials");
        const loginClassValue = await loginAreaElement.getAttribute("class");
        console.log(loginClassValue);
        await expect(loginAreaElement).toHaveAttribute("class", "login_credentials");
    });

})
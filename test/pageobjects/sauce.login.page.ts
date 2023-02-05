import Page from "./page";

class SauceLoginPage extends Page {

    get userNameTextBox() { return $("#user-name"); }
    private get passwordTextBox() { return $("#password"); }
    private get loginButton() { return $("#login-button"); }

    get productTitle() { return $(".title"); }

    get userHeader() { return $("#login_credentials >h4"); }
    get loginAreaElement() { return $("#login_credentials"); }


    async performLogin(username: string, password: string) {
        await this.userNameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.loginButton.click();
    }

    async openApp() {
        await browser.url("https://www.saucedemo.com/");
        await browser.maximizeWindow();
    }

}
export default new SauceLoginPage();
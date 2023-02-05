class WaitPage {

    private get startButton() { return $("#start>button") }
    get helloWorldHeader() { return $("#finish>h4") }
    get loadingIcon() { return $("#loading") }

    async clickStartButton() {
        await this.startButton.click();
    }

    async waitForLoadingIconToDisappear() {
        await this.loadingIcon.waitForDisplayed();
        await this.loadingIcon.waitForDisplayed({ reverse: true, timeout: 10000, timeoutMsg: "Failed while waiting for loading icon to disappear" });
    }
}
export default new WaitPage();
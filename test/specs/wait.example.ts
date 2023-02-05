import waitPage from "../pageobjects/wait.page";

describe('feature: wait strategy', () => {

    beforeEach("open app", async () => {
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
        await browser.maximizeWindow();
    })

    it('should wait for element to appear', async () => {
        await waitPage.clickStartButton();
        await waitPage.helloWorldHeader.waitForDisplayed({ timeout: 10000, timeoutMsg: "failed for header to appear" })
        await expect(waitPage.helloWorldHeader).toHaveText("Hello World!");
    });

    it('should wait until element to appear', async () => {
        await waitPage.clickStartButton();
        await browser.waitUntil(async () => await waitPage.helloWorldHeader.getText() === "Hello World!", { timeout: 10000, timeoutMsg: "failed for text header to match" })
        await expect(waitPage.helloWorldHeader).toHaveText("Hello World!");
    });

    it("should wait for element to disappear", async () => {
        await waitPage.clickStartButton();
        await waitPage.waitForLoadingIconToDisappear();
        await expect(waitPage.helloWorldHeader).toHaveText("Hello World!");
    })
});
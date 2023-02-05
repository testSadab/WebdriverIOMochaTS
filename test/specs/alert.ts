describe('feature: alert', () => {

    beforeEach("Open App", async () => {
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        await browser.maximizeWindow();
    })


    it('should handle JS alert', async () => {
        const jsAlertButton = $("//button[text()='Click for JS Alert']");
        const result = $("#result");

        await jsAlertButton.click();
        expect(await browser.getAlertText()).toEqual("I am a JS Alert");
        await browser.acceptAlert();
        await expect(result).toHaveText("You successfully clicked an alert")

    });

    it('should handle JS Confirm', async () => {
        const jsConfirmButton = $("//button[text()='Click for JS Confirm']");
        const result = $("#result");

        await jsConfirmButton.click();
        await browser.dismissAlert();
        await expect(result).toHaveText("You clicked: Cancel");

        await jsConfirmButton.click();
        await browser.acceptAlert();
        await expect(result).toHaveText("You clicked: Ok");
    });

    it.only('should handle JS Prompt', async () => {
        const jsPromptButton = $("//button[text()='Click for JS Prompt']");
        const result = $("#result");

        await jsPromptButton.click();
        await browser.sendAlertText("testing");
        await browser.acceptAlert();
        await expect(result).toHaveText("You entered: testing");

        await jsPromptButton.click();
        await browser.sendAlertText("testing");
        await browser.dismissAlert();
        await expect(result).toHaveText("You entered: null");

    });
});
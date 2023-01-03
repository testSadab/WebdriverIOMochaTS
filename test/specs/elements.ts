describe('feature: elements', () => {

    it('should find all link text', async () => {
        await browser.url("https://www.google.com/");
        await browser.maximizeWindow();

        const elements = $$("//a");

        for (let i = 0; i < await elements.length; i++) {
            const linkText = await elements[i].getText();
            console.log("Link Text::::", linkText);
        }
    });
});
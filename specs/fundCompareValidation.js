describe('fundCompareValidations', () => {
    var invPortalHomePg = require("../pageObjects/investorPortalHomePage.js");
    var smsfIndHomePage = require("../pageObjects/smsfIndividualHomePage.js");
    var fundComparePg = require("../pageObjects/fundComparePage.js");
    var EC = protractor.ExpectedConditions;

    it('go to investor home page', () => {
        invPortalHomePg.getURL();
        expect(invPortalHomePg.smsfInvestersBtn.isDisplayed()).toBeTruthy();
    })

    it('redirect to smsf and investor home page', () => {
        invPortalHomePg.smsfInvestersBtn.click();
        browser.wait(EC.visibilityOf(smsfIndHomePage.findProductBtn), 5000);
        expect(smsfIndHomePage.findProductBtn.isDisplayed()).toBeTruthy();
    })

    it('go to funds compare page and compare products', () => {
        smsfIndHomePage.fundCompareBtn.click();
        browser.getAllWindowHandles().then((allWindows) => {
            browser.switchTo().window(allWindows[1]);
            browser.wait(EC.visibilityOf(fundComparePg.infoIcon), 5000);
            fundComparePg.fundIdentifierInputOne.sendKeys('VAF');
            browser.wait(EC.visibilityOf(fundComparePg.searchEntity), 5000);
            fundComparePg.searchEntity.click();
            browser.wait(EC.visibilityOf(fundComparePg.replaceBtn), 5000);
            expect(fundComparePg.replaceBtn.isDisplayed()).toBeTruthy();
        })

    })
})
function investorPortalHomePage() {
    
        this.URL = "https://www.vanguardinvestments.com.au/au/portal/homepage.jsp";
        this.smsfInvestersBtn = element(by.linkText('Individual & SMSF investors'));
        this.getURL = function () {
            browser.get(this.URL);
        }
}


module.exports =  new investorPortalHomePage();
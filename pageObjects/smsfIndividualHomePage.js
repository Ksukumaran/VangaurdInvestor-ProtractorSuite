function smsfIndividualHomePage() {
    this.findProductBtn = element(by.id('fundAutocomplete'));
    this.fundCompareBtn = element(by.linkText('Fund compare'));

    
}

module.exports= new smsfIndividualHomePage();
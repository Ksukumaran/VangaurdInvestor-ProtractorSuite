function fundComparePage() {

        this.infoIcon = element(by.id('infoIcon'));
        this.fundIdentifierInputOne = element(by.id('fundInput0'));
        this.fundIdentifierInputTwo = element(by.id('fundInput1'));
        this.fundIdentifierInputThree = element(by.id('fundInput2'));
        this.fundIdentifierInputFour = element(by.id('fundInput3'));
        this.searchEntity = element(by.id('searchLink'));
        this.replaceBtn = element(by.id('replaceButton0'));
        this.addFundBtn = element(by.id('addButton0'));
}

module.exports = new fundComparePage();
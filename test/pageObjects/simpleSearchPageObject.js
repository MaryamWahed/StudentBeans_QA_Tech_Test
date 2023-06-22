const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {

  // get recommendedForYouText(){return $("h2")}
  get searchBarBox(){return $("button[class='css-lohna6']")} 
  get searchBarResult(){return $("div[class='css-5kov97']")}
  get SearchTextBox(){return $("input[type='search']")}
  get theFourthSearchTerm(){return $("(div[data-testid='search_results_row'] div div div[role='presentation'])[4]")}
  get theFourthSearchTermText(){return $("(div[data-testid='search_results_row'] div div div[role='presentation'])[4] a div[2] p span")}


  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async openTheSearchBar () { 
    await elementUtil.clickOnElement(this.searchBarBox)
    await elementUtil.waitForElementToBeVisible(await this.searchBarResult)
    assert(await expect(await this.searchBarResult.isDisplayed()).to.equal(true))

  }
  async searchTheTermInSearchBar (searchTerm) { 
    await elementUtil.elementSendKeys(await this.SearchTextBox, searchTerm)

  }
  async selectTheFourthSearchTerm (){
    await elementUtil.clickOnElement(await this.theFourthSearchTerm)
  }
  async verifySearchTerm(searchTerm){
    await elementUtil.isElementEqualToExpected(await theFourthSearchTermText.getText(), searchTerm)
  }
}

module.exports = SimpleSearchPageObject

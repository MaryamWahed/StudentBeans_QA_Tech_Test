const { Given } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
});

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openTheSearchBar()
 });
 
When('/^I enter "(\w.*)"$/', async (searchTerm) => {
   await simpleSearchPageObject.searchTheTermInSearchBar(searchTerm)
  });
 
Then(/^I should select the 4th "(\w.*)" search listing$/, async (searchTerm)=>{
   await simpleSearchPageObject.selectTheFourthSearchTerm()
   await simpleSearchPageObject.verifySearchTerm(searchTerm)
  });

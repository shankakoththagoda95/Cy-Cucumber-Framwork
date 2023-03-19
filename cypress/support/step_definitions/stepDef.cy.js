/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


function ReturenElement(Testelement){

  cy.readFile('cypress/Locators/test.json').then((json) => {
    cy.log(json.Testelement.path)
   });
  
  // cy.log("cypress/Locators/*.json")
  // cy.log(config)
  
  // fetch("cypress/Locators/*.json")
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   for (let i = 0; i < data.length; i++) {
  //     console.log(data[i]);
  //   }
  // })
}

Given('I vist the {string} page', (weburl) => {
  try {
    cy.visit(weburl)
  } catch (error) {
    throw error
  }
});

Then('I click on the {string}', (webelement) => {
  cy.get(ReturenElement(webelement)).click()
});

// Then("I should see a search bar", () => {
//   cy.get("input").should(
//     "have.attr",
//     "placeholder",
//     "Search the web without being tracked"
//   );
// });


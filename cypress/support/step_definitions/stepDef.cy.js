/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";



Given("Start to type your Given step here", () => {
  cy.log("Nothing pass")
  
  cy.visit('https://www.google.com')
 
});

// Then("I should see a search bar", () => {
//   cy.get("input").should(
//     "have.attr",
//     "placeholder",
//     "Search the web without being tracked"
//   );
// });


/// <reference types="Cypress" />
import InfiniteScrollPage from "../support/PageObjects/InfiniteScrollPage"
const infiniteScrollPage = new InfiniteScrollPage();

describe("infinite scroll test",function(){
    beforeEach(() => 
    {
        cy.visit(Cypress.env("url")+"infinite_scroll")
        cy.wait(2000)
    })
    //test case 1
    it("should scroll to bottom and check new elements are added to html document", () => {
        infiniteScrollPage.Get_initial_subdiv_count()
        infiniteScrollPage.Scroll_to_bottom_Action()
        infiniteScrollPage.Assert_new_subdiv_Addition()
    })
})
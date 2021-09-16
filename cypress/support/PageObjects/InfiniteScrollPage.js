class InfiniteScrollPage
{
    
    Getsubdiv() {

        return cy.get('div.jscroll-added')
    }
    Getsubdivlocator() {

        return 'div.jscroll-added'
    }
    Get_initial_subdiv_count(){
        cy.get('div.jscroll-added').then(listing => {
           const initialCount = Cypress.$(listing).length;
           cy.writeFile('cypress/fixtures/temp.json', { "Initialcount":initialCount})
            initialCount
        })
    }

    Scroll_to_bottom_Action(){
        for(let i=1;i<=5;i++){
            cy.scrollTo('bottom')
            cy.wait(5000);
        }
    }

    Assert_new_subdiv_Addition(){
       cy.fixture('temp.json').then(function(data)
        {
            cy.get('div.jscroll-added').then(finaldivlength=>{
                expect(finaldivlength.length).to.greaterThan(data.Initialcount);
            })
        })
    }
    
}export default InfiniteScrollPage
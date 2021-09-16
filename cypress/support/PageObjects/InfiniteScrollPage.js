class InfiniteScrollPage
{
    //To get sub div elements locator
    Getsubdiv() {
        return cy.get('div.jscroll-added')
    }
    //To scroll to the bottom of the window
    ScrollToBottomAction(){
        this.Getsubdiv().should('have.length',2)
        for(let i=1;i<=3;i++){
            cy.scrollTo('bottom',{duration:4000})
        }
    }
    //To assert if new sub div elements added or not
    AssertNewSubDivAddition(){
        this.Getsubdiv().should('have.length',5)
    }
}export default InfiniteScrollPage
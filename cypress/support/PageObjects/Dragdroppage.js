class DragDropPage
{
    //getting locator of container A
    GetcontainerA() {
        return cy.get('#column-a')
    }

    //getting locator of container B
    GetcontainerB() {
        return cy.get('#column-b')
    }

    //to return container string
    //as drag function accept only locator string as parameter
    GetcontainerBlocator() {
        return '#column-b'
    }

    //to get containerA and check for initial text available in it befor performing drag action
    Assert_initial_text_in_A(){
        this.GetcontainerA().should("contain","A")
    }

    //to get containerB and check for initial text available in it befor performing drag action
    Assert_initial_text_in_B(){
        this.GetcontainerB().should("contain","B")
    }

    //to drag contents in containerA and drop on containerB
    DragAtoB(){
        this.GetcontainerA().drag(this.GetcontainerBlocator())
    }

    //to get containerA and check for final text available in it after drag action
    Assert_final_text_in_A(){
        this.GetcontainerA().should("contain","B")
    }

    //to get containerB and check for final text available in it after drag action
    Assert_final_text_in_B(){

        this.GetcontainerB().should("contain","A")
    }
    
}export default DragDropPage
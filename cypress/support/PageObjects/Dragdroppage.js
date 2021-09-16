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

    /** 
     * This method is to validate text available in container 1
     * @param text text that should be available in container1
    */
    assertTextInContainer1(text){
        this.GetcontainerA().should("contain",text)
    }

    /** 
     * This method is to validate text available in container 2
     * @param text text that should be available in container 2
    */
    assertTextInContainer2(text){
        this.GetcontainerB().should("contain",text)
    }

    //to drag contents in containerA and drop on containerB
    DragAtoB(){
        this.GetcontainerA().drag(this.GetcontainerBlocator())
    }
}export default DragDropPage
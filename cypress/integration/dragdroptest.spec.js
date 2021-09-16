/// <reference types="Cypress" />
/// <reference types="@4tw/cypress-drag-drop" />
import '@4tw/cypress-drag-drop'
import DragDropPage from "../support/PageObjects/DragDropPage"
const dragDropPage = new DragDropPage();


describe("Drag and drop test",function(){

    beforeEach(() => 
    {
        cy.visit(Cypress.env("url")+"drag_and_drop")
    })

    it("Drag and Drop test",()=>{
        //this test is implemented by installing the following plugin @4tw/cypress-drag-drop
        //install package by using the following command npm install @4tw/cypress-drag-drop
        dragDropPage.GetcontainerA().then((containertext) => {
           
          if (containertext.text()=="A")
          {
            //if text available in containerA is equal to A following code is executed
            dragDropPage.Assert_initial_text_in_A()
            dragDropPage.Assert_initial_text_in_B()
            dragDropPage.DragAtoB()
            dragDropPage.Assert_final_text_in_A()
            dragDropPage.Assert_final_text_in_B()
          }
          else{
          //if text available in containerA is not equal to A following code is executed
            dragDropPage.Assert_final_text_in_A()
            dragDropPage.Assert_final_text_in_B()
           dragDropPage.DragAtoB()
           dragDropPage.Assert_initial_text_in_A()
           dragDropPage.Assert_initial_text_in_B()
          }
        })
           
    })
})

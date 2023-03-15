/// <reference types="cypress" />

describe("Apica Demo Site",() =>{
    beforeEach(()=>{
        cy.visit("http://ticketmonster.apicasystem.com/ticket-monster/")  
        cy.viewport(1280, 1024)

    })

    it("Ticket Monster About", ()=> {

        //buy tickets now
        cy.get(".btn-primary").click()

        //Events
        cy.get(".btn-danger").should("be.visible")
        cy.contains("Book tickets").click()

        //Book Venue
        cy.contains("What?").should("be.visible")
        cy.get("#venueSelector").should("be.visible")
        cy.get("#venueSelector").select("2")
        
        //Date
        cy.contains("When?").should("be.visible")
        cy.get("#dayPicker").select("2017-11-11")
        cy.get("#performanceTimes").should("have.text","11:45")        
        cy.get("[value='Order tickets']").click()

        //Register //Camp Nou, Sat 11 November 2017 at 11:45
        cy.contains("Camp Nou, Sat 11 November 2017 at 11:45").should("be.visible") 
        cy.get("#sectionSelect").select("411")
        cy.get("[name='tickets-1']").type("1")
        cy.get("[value='Add tickets']").click()

        //Requested Tickets
        cy.contains("Requested tickets").should("be.visible")
        cy.get("#email").type("demo@apica.com")
        cy.get("[value='Checkout']").click()
        
        //Checkout Confirmation
        cy.contains("demo@apica.com").should("be.visible")
        
        //Home
        cy.contains("Home").click()


    })

   
})
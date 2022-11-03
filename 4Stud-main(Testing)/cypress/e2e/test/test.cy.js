/// <reference types="cypress" />

describe('example to-do app', ()=> {
    describe('group for tests',() =>{
        beforeEach(() =>{
            cy.visit('/')
        })
        it('class test',() =>{
            cy.get('.header').should('exist')
            cy.get('.content').should('exist')
            cy.get('.footer').should('exist')
            cy.get('.followUs').should('exist')
            cy.get('.contacts').should('exist')
            cy.get('.sort').should('exist')
            cy.get('.categories').should('exist')
            cy.get('.mainList').should('exist')
            cy.get('.listGoods').should('exist')
            cy.get('.blockgoods').should('exist')
            cy.get('.cardPhoto').should('exist')
            cy.get('.photo').should('exist')
            cy.get('.cardInfo').should('exist')
            cy.get('.bt').should('exist')
            cy.get('.icon8').should('exist')
            cy.get('.icon9').should('exist')
        })
        it('clicking', () => {
            cy.get('.pages.myRegistration').should('exist')
            cy.get('.pages.myRegistration').click
            cy.get('.pages.mySignIn').should('exist')
            cy.get('.pages.mySignIn').click
            cy.get('.pages.myOffice').should('exist')
            cy.get('.pages.myOffice').click
            cy.get('.btnCategories').should('exist')
            cy.get('.btnCategories').click
            cy.get('.bt').should('exist')
            cy.get('.bt').click
            cy.get('.router-link-exact-active.router-link-active').should('exist')
            cy.get('.router-link-exact-active.router-link-active').click
          })
        it("check start url", ()=>{
            cy.url().should("include", "//localhost:8080/");
            });
        it("check url", ()=>{
            cy.url().should( "exist","include", "//localhost:8080/#/myAccount",);
            cy.url().should( "exist","include", "//localhost:8080/#/registration");
            cy.url().should( "exist","include", "//localhost:8080/#/enter");
            });
    })
})
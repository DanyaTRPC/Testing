/// <reference types="cypress" />


describe('eneyida test',() =>{
    beforeEach(() =>{
        cy.visit('https://eneyida.tv/')
    })
    it('checking class',() =>{
        cy.get('.header.clearfix').should('exist')
        cy.get('.main.clearfix.fx_col').should('exist')
    })
    it('clicking', () => {
        cy.get('.log_btn.button').should('exist')
        cy.get('.log_btn.button').click
      })
    it("check url", ()=>{
        cy.url().should("include", "//eneyida.tv")
        cy.url().should('exist',"include", "https://eneyida.tv/?do=lastcomments")
        })        
    it("search", () => {
        cy.get("#story").type("Омана{enter}");
        cy.get(".wrap").should("exist");
    })        
        
    
    it("testing api", () => {
        cy.request("https://analytics.google.com/g/collect?v=2&tid=G-2DNY473DQS&gtm=2oeb70&_p=232154154&cid=689021678.1660290891&ul=ru-ru&sr=1536x864&uaa=x86&uab=64&uafvl=Google%2520Chrome%3B107.0.5304.106%7CChromium%3B107.0.5304.106%7CNot%253DA%253FBrand%3B24.0.0.0&uamb=0&uam=&uap=Windows&uapv=10.0.0&uaw=0&_s=1&sid=1668086021&sct=219&seg=1&dl=https%3A%2F%2Feneyida.tv%2F&dr=https%3A%2F%2Feneyida.tv%2F&dt=%D0%94%D0%B8%D0%B2%D0%B8%D1%82%D0%B8%D1%81%D1%8F%20%D1%84%D1%96%D0%BB%D1%8C%D0%BC%D0%B8%20%D1%96%20%D1%81%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%20%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%8E%20%D0%B2%20HD%20%D1%8F%D0%BA%D0%BE%D1%81%D1%82%D1%96&en=page_view&_ee=1").as(
        "ETest"
    );

        cy.get("@ETest").should((response) => {
        expect(response.body);
});
});
        
})
class SignInPage{
    constructor(){
        this.pagePath = "/#/enter"
        this.checkExistSelectors = ['.header','.router-link-active','.logo', '.pages.myOffice',
        '.pages.myRegistration','.pages.mySignIn.router-link-exact-active.router-link-active',
        '.content','.icon4','.blockEnt','.footer','.followUs','.contacts']
        this.checkClickingSelectors =['.router-link-active','.pages.myOffice','.pages.myRegistration']
         }
    
    visitSignInPage(){
        cy.visit(this.pagePath)
    }
    checkExistSignInPage(){
        describe('checkExistSignInPage',()=>{
            beforeEach(() =>{
                this.visitSignInPage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingSignInPage',()=>{
            beforeEach(() =>{
                this.visitSignInPage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
}

export default new SignInPage()
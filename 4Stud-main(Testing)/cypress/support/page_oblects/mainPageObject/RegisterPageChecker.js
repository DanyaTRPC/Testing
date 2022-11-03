class RegisterPageChecker{
    constructor(){
        this.pagePath = "/#/registration"
        this.checkExistSelectors = ['.header', '.router-link-active',
    '.logo','.pages.myOffice', '.pages.myRegistration.router-link-exact-active.router-link-active',
    '.pages.mySignIn', '.content', '.icon5', '.blockRegestration',
    '.footer', '.followUs', '.contacts']
    this.checkClickingSelectors =['.router-link-active','.pages.myOffice', '.pages.myRegistration.router-link-exact-active.router-link-active',
    '.pages.mySignIn']
    }
    
    visitRegistrationPage(){
        cy.visit(this.pagePath)
    }
    checkExistRegPage(){
        describe('checkExistRegistrationPage',()=>{
            beforeEach(() =>{
                this.visitRegistrationPage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingRegistrationPage',()=>{
            beforeEach(() =>{
                this.visitRegistrationPage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
}

export default new RegisterPageChecker()
class MyOfficePageChecker{
    constructor(){
        this.pagePath = "/#/myAccount"
        this.checkExistSelectors = ['.header','.router-link-active','.pages.myOffice.router-link-exact-active.router-link-active',
        '.pages.myRegistration','.content','.myAccountInfo','.icon10','.timeoutPhoto',
        '.pages','.icon12','#myAdvertisemen','#Advertisemen','.footer','.followUs','.contacts']
        this.checkClickingSelectors =['#addAdvertisement','.pages.mySignIn','.pages.myRegistration','.pages.myOffice.router-link-exact-active.router-link-active',
        '.router-link-active']
        }
    
    visitMyOfficePage(){
        cy.visit(this.pagePath)
    }
    checkExistMyOfficePage(){
        describe('checkExistMyOfficePage',()=>{
            beforeEach(() =>{
                this.visitMyOfficePage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingMyOfficePage',()=>{
            beforeEach(() =>{
                this.visitMyOfficePage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
}

export default new MyOfficePageChecker()
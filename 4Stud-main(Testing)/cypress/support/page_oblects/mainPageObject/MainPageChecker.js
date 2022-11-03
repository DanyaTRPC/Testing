class MainPageChecker {
    constructor(){
        this.pagePath = "/"
        this.checkExistSelectors = [".header", ".content"
    ,'.footer', '.followUs', '.contacts', '.sort', '.categories',
    '.mainList', '.listGoods', '.blockgoods', '.cardPhoto', '.photo',
    '.bt', '.cardInfo', '.icon8', '.icon9' ]
    this.checkClickingSelectors = ['.pages.myRegistration',
    '.pages.mySignIn', '.pages.myOffice', '.btnCategories', '.bt', '.router-link-exact-active.router-link-active' ]
    }
    visitMainPage(){
        cy.visit(this.pagePath)
    }
    checkExistPage(){
        describe('checkExistMainPage',()=>{
            beforeEach(() =>{
                this.visitMainPage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingMainPage',()=>{
            beforeEach(() =>{
                this.visitMainPage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
    
}
export default new MainPageChecker()
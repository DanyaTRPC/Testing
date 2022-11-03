class AddGoodsPageChecker{
    constructor(){
        this.pagePath = "/#/addGoods"
        this.checkExistSelectors = ['.header','.router-link-active','.logo','.pages.myOffice',
        '.pages.myRegistration','.pages.mySignIn','.content','.blockAddGoods','.text.nameAdd','.text',
        '.decription','.footer','.followUs','.contacts']
        this.checkClickingSelectors =['.router-link-active','.pages.myOffice','.pages.myRegistration','.pages.mySignIn']
          }
    
    visitAddGoodsPage(){
        cy.visit(this.pagePath)
    }
    checkExistAddGoodsPage(){
        describe('checkExistAddGoodsPage',()=>{
            beforeEach(() =>{
                this.visitAddGoodsPage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingAddGoodsPage',()=>{
            beforeEach(() =>{
                this.visitAddGoodsPage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
}

export default new AddGoodsPageChecker()
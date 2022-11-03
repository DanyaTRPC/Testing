class AboutGoodsPage{
    constructor(){
        this.pagePath = "/#/AboutGoods"
        this.checkExistSelectors = ['.header','.router-link-active','.logo','.pages.myOffice',
        '.pages.myRegistration','.pages.mySignIn','.content','.blockAboutGoods','.icon13',
        '.photoAboutGoods','.icon14','.description','.footer','.followUs','.contacts']
        this.checkClickingSelectors =['.router-link-active','.pages.myOffice','.pages.myRegistration','.pages.mySignIn']
          }
    
    visitAboutGoodsPage(){
        cy.visit(this.pagePath)
    }
    checkExistAboutGoodsPage(){
        describe('checkExistAboutGoodsPage',()=>{
            beforeEach(() =>{
                this.visitAboutGoodsPage()
            })
            it('existTest',()=>{
                this.checkExistSelectors.forEach(selector =>  
                    cy.get(selector).should('exist'))
            })
        })
        
    }
    checkClickingPage(){
        describe('checkClickingAboutGoodsPage',()=>{
            beforeEach(() =>{
                this.visitAboutGoodsPage()
            })
            it('clickingTest',()=>{
                this.checkClickingSelectors.forEach(button =>  
                    cy.get(button).click)
            })
        })
        
    }
}

export default new AboutGoodsPage()
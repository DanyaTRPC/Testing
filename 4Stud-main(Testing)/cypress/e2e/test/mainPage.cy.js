import MainPageChecker from "../../support/page_oblects/mainPageObject/MainPageChecker";
function checkMainPage (){
    MainPageChecker.checkExistPage()
}
function checkExistMainPage(){
    MainPageChecker.checkClickingPage()

}
it("check url", ()=>{
    cy.url().should( "exist","include", "//localhost:8080/#/myAccount",);
    cy.url().should( "exist","include", "//localhost:8080/#/registration");
    cy.url().should( "exist","include", "//localhost:8080/#/enter");
    });

checkMainPage()
checkExistMainPage()

describe('first project', ()=>{



 it('testcases1', ()=>{
    
    cy.visit("http://localhost:4200/pages")
   
    cy.get("a[title='Forms']").click()
    cy.get("a[title='Form Layouts'] span[class='menu-title']").click()



    cy.get('#inputEmail3').type('rajusharma@gmail.com')
    cy.get('#inputPassword3').type('raju123')
    cy.get("div[class='checkbox'] span[class='custom-checkbox']").click()
    cy.get('.appearance-filled.size-medium.status-warning.shape-rectangle.transitions').should('be.visible')
 
 })



 it('testcases2', ()=>{
    
   cy.visit("http://localhost:4200/pages")

   cy.get("a[title='Forms']").click()
   cy.get("a[title='Form Layouts'] span[class='menu-title']").click()
   cy.get('.inner-circle').should('have.length',3)
   cy.get('nb-radio:nth-child(1) label:nth-child(1) span:nth-child(2)').click({force:true})
   cy.get('nb-radio:nth-child(2) label:nth-child(1) span:nth-child(3)').should('not.be.checked')
   cy.get('nb-radio:nth-child(2) label:nth-child(1) span:nth-child(3)').click({force:true})
   cy.get('[type="radio"]').eq(2).should('be.disabled')
  




})

it('testcases3', ()=>{
    
   cy.visit("http://localhost:4200/pages")
   cy.contains('Modal & Overlays').click()
   cy.contains('Toastr').click()
   cy.get('[type="checkbox"]').check({force:true})
   

})



it('testcases3', ()=>{
    
   cy.visit("http://localhost:4200/pages")
   cy.contains('Modal & Overlays').click()
   cy.contains('Toastr').click()
   cy.get('[type="checkbox"]').eq(1).check({force:true})



})












})


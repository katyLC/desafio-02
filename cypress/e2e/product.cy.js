
//const Cypress  = require("cypress");
//<reference  types='cypress'>

import {ProductPage} from "../support/page/pageProduct"

describe("Online shop", ()=>{

    const productPage = new ProductPage()
    before('Iniciar sesión', ()=>{
        cy.login(Cypress.env().usuario, Cypress.env().password);
        // cy.log('Inicio session')
        cy.visit("/")
        })

    it('Editar usuario', ()=>{

        cy.fixture('data').then(data =>{
            cy.deleteProduct(data.product.id);
            cy.createProduct(data.product)
            cy.editProduct(data.product.id)
            productPage.onlineShopClick.click()
            productPage.typeSearchSelect.select('ID')
            productPage.searchBarType.type(`${data.product.id} {enter}`)
            productPage.labelNameProduct.should('have.text', 'Casaca Rosa')
            productPage.labelPriceProduct.should('have.text', '205')



        })
    })
})
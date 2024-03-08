// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, password)=>{
    cy.request({
        method : "POST",
        url: 'https://pushing-it.onrender.com/api/login',
        body: {
            username:usuario,
            password: password
        }
    }).then(respuesta=>{

        window.localStorage.setItem('token', respuesta.body.token);
        window.localStorage.setItem('user', respuesta.body.user.username);
        window.localStorage.setItem('userId', respuesta.body.user._id);
        Cypress.env().token = respuesta.body.token;
    })

})

Cypress.Commands.add('createProduct', (body)=> {
    cy.request({
        method :"POST",
        url: 'https://pushing-it.onrender.com/api/create-product',
        body: body
    })
})

Cypress.Commands.add('deleteProduct', (id)=>{
    cy.request({
        method: "GET",
        url: `https://pushing-it.onrender.com/api/products?id=${id}`,
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${Cypress.env().token}`
        }
    }).its('body.products.docs').each((product)=>{

        cy.request({

            method: "DELETE",
            url:`https://pushing-it.onrender.com/api/product/${product._id}`,
            headers :{
                Authorization : `Bearer ${Cypress.env().token}`
            }
        })

    })
})


Cypress.Commands.add('editProduct',(id)=>{

    cy.request({
        method : "GET",
        url:`https://pushing-it.onrender.com/api/products?id=${id}`,
        headers :{
            Authorization : `Bearer ${Cypress.env().token}`
        }
    }).its("body.products.docs").each((product)=>{

        cy.request( {
            method: "PUT",
            url:`https://pushing-it.onrender.com/api/product/${product._id}`,
            body: {
                name: "Casaca Rosa",
                price: 205,
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Y3gA9RyvGqVugl2rM6ur6GuLD1Mw6C-_90ZRMbQNig&s"
            },
            headers: {
                Authorization : `Bearer ${Cypress.env().token}`
            }
        }).then((response) =>{
            expect(response.body)
        })
    })

})

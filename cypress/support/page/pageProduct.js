export  class ProductPage {

    constructor() {

        this.onlineShop = '[data-cy="onlineshoplink"]'
        this.typeSearch = '[data-cy="search-type"]'
        this.searchBar = '[data-cy="search-bar"]'
        this.nameProduct = '[data-cy="name"]'
        this.priceProduct = '[data-cy="price"]'
        this.urlImage = '[]'


    }
    get onlineShopClick(){
        return cy.get(this.onlineShop)
    }
    get typeSearchSelect(){
        return cy.get(this.typeSearch)
    }
    get searchBarType(){
        return cy.get(this.searchBar)
    }

    get labelNameProduct(){
        return cy.get(this.nameProduct)

    }
    get labelPriceProduct(){
        return cy.get(this.priceProduct)
    }


}
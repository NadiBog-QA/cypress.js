describe('Тестирование Автосуши', function () {
    
    it('Добавление товара в корзину', function () {
        cy.visit('https://br.avtosushi.ru/');
        cy.get('[href="/shop/vozmi-s-soboi"] > .picture > .portfolio-overlay-2 > .icons').click();
        cy.get('#cart-form-8167 > .xs-flex > .portfolio-overlay-2 > .icons > :nth-child(1) > .icon > .shop-add-link').click();
        cy.get('#shop_cart');
        cy.contains('Суширрито Лосось в терияки');
  

    })
})
describe('Проверка авторизации', function () {

   it('Позитивный кейс, валидные логин и пароль', function () {
      cy.visit('https://staya.dog/');
      cy.get('.header-bottom__right--link').click();
      cy.get('.auth-form > form > [type="email"]').type('ввести логин');
      cy.get('.auth-form > form > [type="password"]').type('ввести пароль');
      cy.get('.auth-form__submit').click();
      cy.contains('Мои заказы');  
    })

   it('Негативный кейс, верный логин, неверный пароль', function () {
      cy.visit('https://staya.dog/');
      cy.get('.header-bottom__right--link').click();
      cy.get('.auth-form > form > [type="email"]').type('ввести логин');
      cy.get('.auth-form > form > [type="password"]').type('ввести неверный пароль');
      cy.get('.auth-form__submit').click();
      cy.contains('Невозможно войти с предоставленными учетными данными.');  
    })

})


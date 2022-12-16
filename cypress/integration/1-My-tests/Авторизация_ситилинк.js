describe('Проверка авторизации', function () {

   it('Позитивный кейс, верные логин и пароль', function () {
      cy.visit('https://www.citilink.ru/');
      cy.get('.AuthPopup__button > .Link > .HeaderMenu__button').click();
      cy.get('.SignIn__login > .InputBox > .InputBox__container > .InputBox__input').type('ввести логин');
      cy.get('.SignIn__password > .InputBox > .InputBox__container > .InputBox__input').type('ввести пароль');
      cy.get('.SignIn__button').click();
      cy.contains('Надежда');

    })

    })

   
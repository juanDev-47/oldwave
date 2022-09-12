describe('oldwave Home component', () => {
    it('Page initial compiled', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('¿Qué estás buscando hoy?');
    });

});
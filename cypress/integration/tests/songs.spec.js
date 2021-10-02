describe('The Songs page', () => {
    beforeEach(() => {
        cy.visit('/') // Uses baseUrl defined in cypress.json config file, run project locally with npm run `build-prod` & `serve`
        cy.findByText('Songs').click()
    })

    it('shows initial songs', () => { // Asserts that base url loads successfully
        cy.get('#songs').find('> #songCard').should('have.length.above', 1)
    })

    it('filter songs', () => { // Asserts that base url loads successfully
        cy.findByPlaceholderText('Search songs! 🎵').click().type('Reaper')

        cy.get('#songs').find('> #songCard').should('have.length', 1)
    })
})

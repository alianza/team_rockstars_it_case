describe('The Artists page', () => {
    beforeEach(() => {
        cy.visit('/') // Uses baseUrl defined in cypress.json config file, run project locally with npm run `build-prod` & `serve`
    })

    it('shows initial artists', () => { // Asserts that base url loads successfully
        cy.get('#artists').find('> a').should('have.length.above', 1)
    })

    it('filter artists', () => { // Asserts that base url loads successfully
        cy.findByPlaceholderText('Search artists! 👨‍🎤').click().type('Fleetwood Mac')

        cy.get('#artists').find('> a').should('have.length', 1)
    })

    it('open artist', () => { // Asserts that base url loads successfully
        cy.findAllByText('3 Doors Down').click()

        cy.location('pathname').should('include', '/artist')

        cy.findByText('Artist: "3 Doors Down"').should('exist')

        cy.findByText('5 Songs:').should('exist')

        cy.get('#artist').find('> #songCard').should('have.length', 5)
    })
})

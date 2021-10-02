describe('The Genres page', () => {
    beforeEach(() => {
        cy.visit('/') // Uses baseUrl defined in cypress.json config file, run project locally with npm run `build-prod` & `serve`
        cy.findByText('Songs').click()
    })

    it('open genre', () => { // Asserts that base url loads successfully
        cy.get('a[href="/genre/Classic Rock"]').first().click()

        cy.location('pathname').should('include', '/genre/Classic%20Rock')

        cy.findByText('Genre: "Classic Rock"').should('exist')
    })
})

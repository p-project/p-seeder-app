import utils from '../utils'

describe('Homepage', function () {
    beforeEach(utils.beforeEach)
    afterEach(utils.afterEach)

    it('should display a welcoming title', function () {
        return this.app.client.getTagName('h1')
            .then(text => {
                expect(text).to.equal("Bienvenue.")
            })
    })

    it('shows display a login form', function () {
        let elem = $('.login-form')
        let tagName = elem.getTagName()

        return expect(tagName).to.equal('form')
    })
})

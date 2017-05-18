import utils from '../utils'

describe('Homepage', function () {
    beforeEach(utils.beforeEach)
    afterEach(utils.afterEach)

    it('should display a welcoming title', function () {
        return this.app.client.getText('h1')
            .then(text => {
                expect(text).to.equal("Welcome.")
            })
    })

    it('shows a login form', function () {
        let form = this.app.client.element('form')

        return expect(form).to.not.equal(undefined)
    })
})

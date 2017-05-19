import utils from '../utils'

describe('Find seed page', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('should browse to the Find seed page', function () {

    this.app.client.click('a[href*="findSeed"]')
      .then(function (app) {
        return app.client.getText('h2')
          .then(text => {
            expect(text).to.equal("Find a seed")
          })
      })
  })
})


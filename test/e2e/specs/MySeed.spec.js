import utils from '../utils'

describe('My seeds page', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('should display the good title', function () {
    this.app.client.click('a[href*="seedList"]')
      .then(function (app) {
        return app.client.getText('h2')
        .then(text => {
          expect(text).to.equal("My seeds")
        })
    })
  })
})


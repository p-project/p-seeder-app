import utils from '../utils'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('should show an initial window', function () {
    return this.app.client.getWindowCount()
      .then(count => {
        expect(count).to.equal(1)
      })
  })

  it('should show the proper application title', function () {
    return this.app.client.getTitle()
      .then(title => {
        expect(title).to.equal('p-seeder-app')
      })
  })
})

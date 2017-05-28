import utils from '../utils'

describe('Homepage', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('shows a login form', function () {
    let form = this.app.client.element('form')

    return expect(form).to.not.equal(undefined)
  })
})

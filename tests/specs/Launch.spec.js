import utils from '../utils'

import { name } from '../../config'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('opens a window', function () {
    return this.app.client.waitUntilWindowLoaded()
      .getWindowCount().should.eventually.equal(1)
  })

  it('tests the title', function () {
    return this.app.client.waitUntilWindowLoaded()
      .getTitle().should.eventually.equal(name)
  })
})

import utils from '../utils'

describe('Launch', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  it('redirect successfully', function () {
    return this.app.client.findElement(By.xpath("//*[text()='continue']")).click('')
  })
})
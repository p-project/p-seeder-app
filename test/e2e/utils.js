import electron from 'electron'
import { Application } from 'spectron'

export default {
  afterEach () {
    this.timeout(10000)

    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  },
  beforeEach () {
    this.timeout(10000)
    this.app = new Application({
      path: electron,
      args: ['app'],
      startTimeout: 10000,
      waitTimeout: 10000
    })

    /*
     * Starts application and forces the current
     * language to English
     */
    return this.app.start().then(function(app) {
      app.client.execute(function() {
        window.vue.config.lang = 'en'
      })
    })
  }
}

import utils from '../utils'

describe('Navigation', function () {
  beforeEach(utils.beforeEach)
  afterEach(utils.afterEach)

  let sections = [
    { nav: { '#new-seed-toggle': '#new-seed', 'a[href*="findSeed"]': false }, title: 'Find a seed', class: 'find-seed' },
    { nav: { '#new-seed-toggle': '#new-seed', 'a[href*="newSeed"]': false }, title: 'New seed', class: 'new-seed' },
    { nav: { 'a[href*="seedList"]': false }, title: 'My seeds', class: 'seed-list' }
  ]
  sections.forEach(section => {
    it('should display the "' + section.title + '" page', function () {
      let appContent = this.app.client.click('#menu-toggle').waitForVisible('#sidenav')
      for (let item in section.nav) {
        appContent = appContent.click(item)
        let waitedContent = section.nav[item]
        if (waitedContent) {
          appContent = appContent.waitForVisible(waitedContent)
        }
      }
      return appContent.getText('h2')
        .then(text => {
          expect(text).to.equal(section.title)
        })
    })
  })
})

'use strict'

require('babel-register')({
  ignore: /node_modules/
})

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

global.before(function () {
  chai.should()
  chai.use(chaiAsPromised)
})

require('require-dir')('./specs')
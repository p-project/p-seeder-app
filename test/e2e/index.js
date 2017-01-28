'use strict'

process.env.BABEL_ENV = 'testing-e2e'

require('babel-register')({
  ignore: /node_modules/
})

const { expect, should, assert } = require('chai')
global.expect = expect
global.should = should
global.assert = assert

require('require-dir')('./specs')

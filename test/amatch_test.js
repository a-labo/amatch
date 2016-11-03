/**
 * Test case for amatch.
 * Runs with mocha.
 */
'use strict'

const amatch = require('../lib/amatch.js')
const assert = require('assert')
const co = require('co')

describe('amatch', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Amatch', () => co(function * () {
    {
      let match = amatch('foo:*,bar:*,-bar:baz:*')
      assert.ok(match('foo:1234'))
      assert.ok(match('bar:1234'))
      assert.ok(!match('bar:baz:235'))
      assert.ok(!match('quz:1234'))
    }
  }))
})

/* global describe, before, after, it */

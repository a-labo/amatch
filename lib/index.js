/**
 * Namespace string matcher
 * @module amatch
 * @version 1.0.1
 */

'use strict'

const amatch = require('./amatch')

let lib = amatch.bind(this)

Object.assign(lib, amatch, {
  amatch
})

module.exports = lib

'use strict'

const amatch = require('amatch')

{
  let match = amatch('foo:*,bar:*')
  console.log(match('foo:1234')) // => true
  console.log(match('bar:1234')) // => true
  console.log(match('baz:1234')) // => false
}

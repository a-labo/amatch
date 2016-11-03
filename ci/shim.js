#!/usr/bin/env node

/**
 * Generate shim
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababelES2015 = require('ababel-es2015')

runTasks('shim', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  }),
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/node'
  }),
  () => ababelES2015('**/*.js', {
    cwd: 'vendor',
    out: 'shim/vendor'
  })
], true)

/**
 * Simple matcher
 * @function amatch
 * @param {string} patterns
 * @returns {function}
 */
'use strict'

/** @lends amatch */
function amatch (patterns = '') {
  let { rejects, accepts } = amatch.parse(patterns)
  return function matches (value) {
    for (let reject of rejects) {
      if (reject.test(value)) {
        return false
      }
    }
    for (let accept of accepts) {
      if (accept.test(value)) {
        return true
      }
    }
    return false
  }
}

Object.assign(amatch, {
  parse (patterns) {
    let rejects = []
    let accepts = []
    for (let pattern of patterns.split(/[\s,]+/)) {
      if (!pattern) {
        continue
      }
      let converted = pattern.replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?')
      if (converted[ 0 ] === '-') {
        rejects.push(new RegExp('^' + converted.substr(1) + '$'))
      } else {
        accepts.push(new RegExp('^' + converted + '$'))
      }
    }
    return { rejects, accepts }
  }
})

module.exports = amatch



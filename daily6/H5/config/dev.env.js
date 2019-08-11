'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ANDORID_URL:'"https://www.baidu.com/"',
  IOS_URL:'"https://www.baidu.com/"'
})

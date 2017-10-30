'use strict';

const cjs = require('rollup-plugin-commonjs')
const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    rollup: {
      plugins: [
        cjs({
          include: /node_modules/
        })
      ]
    }
  })

  return app.toTree();
}

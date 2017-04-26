import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const format = process.env.build

export default {
  entry: 'lib/shortcuts.js',
  moduleName: 'shortcuts',
  format: format,
  plugins: [
    nodeResolve({
        jsnext: true,
        main: true
    }),

    commonjs({
    }),
    buble(),
    uglify()
  ],
  dest: `lib/shortcuts.${format}.js`
}

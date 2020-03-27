import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';

const config = {
  input: 'demo/src/main.js',
  output: {
    file: 'demo/dist/app.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    vue({
      css: false,
      needMap: false,
    }),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    builtins(),
    commonjs(),
  ],
};

export default config;

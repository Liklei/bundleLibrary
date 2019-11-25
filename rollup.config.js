import resolve from 'rollup-plugin-node-resolve';
import replace from "rollup-plugin-replace";
import commonjs from 'rollup-plugin-commonjs';
import { uglify }  from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'TechSdk',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve({ module: true }), 
			commonjs(),
			babel({
				exclude: 'node_modules/**' 
			}),
			replace({
				exclude: 'node_modules/**',
				ENV: JSON.stringify(process.env.NODE_ENV)
			}),
			uglify()
		]
	},
	{
		input: 'src/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];

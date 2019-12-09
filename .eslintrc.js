/*
 * @Author: qiaoxin 
 * @Email: qiaoxinfc@gmail.com 
 * @Date: 2019-09-11 14:47:20 
 * @Last Modified by: qiaoxin
 * @Last Modified time: 2019-10-30 11:07:27
 * @describe: eslint config 
 */
const path = require('path');

module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true,
		'amd': true
	},
	'extends': [
		'plugin:@typescript-eslint/eslint-recommended',
		// 'react-app'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true,
			'templateStrings': true,
			'superInFunctions': true,
			'spread': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react', 
		'react-hooks',
		'@typescript-eslint'
	],
	'settings': {
		'import/resolver': {
			'webpack': {
				'config': path.resolve('./build/config/webpack.config.js')
			}
		}
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'padded-blocks': ['error',
			{
			'switches': 'always',
			'classes': 'never',
			'blocks': 'always'
			}
		],
	}
};
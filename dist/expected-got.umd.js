(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array'), require('@bemoje/type-of'), require('chalk')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array', '@bemoje/type-of', 'chalk'], factory) :
	(global = global || self, global['expected-got'] = factory(global.isArray, global.typeOf, global.chalk));
}(this, (function (isArray, typeOf, chalk) { 'use strict';

	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;
	typeOf = typeOf && Object.prototype.hasOwnProperty.call(typeOf, 'default') ? typeOf['default'] : typeOf;
	chalk = chalk && Object.prototype.hasOwnProperty.call(chalk, 'default') ? chalk['default'] : chalk;

	/**
	 * Creates an error-message string with ANSI-colors to make it easy to spot in the console.
	 * @method expectedGot
	 * @param {function} constructor - The expected type's constructor
	 * @param {*} value - The value argued
	 * @returns {string} The error message string (ANSI-formatted).
	 */
	function expectedGot(constructor, value) {
		const findTypeName = (ctor) => {
			return typeof ctor.name === 'string'
				? ctor.name
				: typeof ctor === 'string'
				? ctor
				: typeOf(ctor)
		};

		if (isArray(constructor)) {
			constructor = constructor.map(findTypeName).join(', ');
		} else {
			constructor = findTypeName(constructor);
		}

		return [
			chalk.gray('Expected '),
			chalk.bold.green(constructor),
			chalk.gray(', got '),
			chalk.bold.red(typeOf(value)),
		].join('')
	}

	return expectedGot;

})));

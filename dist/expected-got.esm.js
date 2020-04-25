import isArray from '@bemoje/is-array';
import typeOf from '@bemoje/type-of';
import chalk from 'chalk';

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

export default expectedGot;

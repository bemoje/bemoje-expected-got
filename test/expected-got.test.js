import stripAnsi from 'strip-ansi'
import expectedGot from '../src/expected-got'

describe('expectedGot', () => {
	test('works', () => {
		expect(stripAnsi(expectedGot(String, 75))).toBe(
			'Expected String, got Number',
		)
		expect(stripAnsi(expectedGot([String, RegExp], 75))).toBe(
			'Expected String, RegExp, got Number',
		)
	})
})

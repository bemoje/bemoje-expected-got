import expectedGot from '../src/expected-got'

const shouldBeString = 75
const shouldBeNumberOrRegExp = 'asd'

expectedGot(String, shouldBeString)
//=> 'Expected String, got Number'

expectedGot([Number, RegExp], shouldBeNumberOrRegExp)
//=> 'Expected Number, RegExp, got String'

# @bemoje/expected-got

Creates an error-message string with ANSI-colors to make it easy to spot in the console.

#### Version

<span><a href="https://npmjs.org/@bemoje/expected-got" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/expected-got" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/expected-got" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-expected-got.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/expected-got" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-expected-got.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/expected-got" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/expected-got" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-expected-got/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-expected-got" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/expected-got
npm install --save @bemoje/expected-got
npm install --save-dev @bemoje/expected-got
```

## Usage

```javascript
import expectedGot from '@bemoje/expected-got'

const shouldBeString = 75
const shouldBeNumberOrRegExp = 'asd'

expectedGot(String, shouldBeString)
//=> 'Expected String, got Number'

expectedGot([Number, RegExp], shouldBeNumberOrRegExp)
//=> 'Expected Number, RegExp, got String'

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### expectedGot

Creates an error-message string with ANSI-colors to make it easy to spot in the console.

##### Parameters

-   `constructor` **[function][3]** The expected type's constructor

-   `value` **any** The value argued

##### Returns
**[string][4]** The error message string (ANSI-formatted).

[1]: #expectedgot

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
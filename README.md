# [@fav/math.log10][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates the base 10 logarithm of a number.

*This program is made referring to [this article about Math.log10][mdn-math-log10-url] of MDN web docs.*

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


# Install

To install from npm:

```sh
$ npm install --save @fav/math.log10
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/math.log10/` directory manually.*

## Usage

For Node.js:

```js
var log10 = require('@fav/math.log10');

Math.log10(2);      // => 0.3010299956639812
Math.log10(1);      // => 0
Math.log10(0);      // => -Infinity
Math.log10(-2);     // => NaN
Math.log10(100000); // => 5
```

For Web browsers:

```html
<script src="fav.math.log10.min.js"></script>
<script>
var log10 = fav.math.log10;
log10(2);  // => 0.3010299956639812
</script>
```

## API

### <u>log10(x) : number</u>

Calculates the base 10 logarithm of a number.

**Parameters:**

| Parameter | Type   | Description                         |
|:----------|:------:|:------------------------------------|
| *x*       | number | A number.                           |

**Returns:**

The base 10 logarithm of the given number.
If the number is negative, NaN is returned.


## Checked

### Node.js (11〜)

| Platform  |   11   |
|:---------:|:------:|
| macOS     |&#x25ef;|
| Windows10 |&#x25ef;|
| Linux     |&#x25ef;|

### Node.js (4〜10)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-math.log10/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/math.log10
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-math.log10.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-math.log10
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-math.log10?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-math-log10
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-math-log10/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-math.log10?branch=master     
[mdn-math-log10-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10 

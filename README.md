<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNonEnumerableProperty

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if an object's own property is non-enumerable.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-nonenumerable-property
```

</section>

<section class="usage">

## Usage

```javascript
var isNonEnumerableProperty = require( '@stdlib/assert-is-nonenumerable-property' );
```

#### isNonEnumerableProperty( value, property )

Returns a `boolean` indicating if a `value` has a non-enumerable `property`.

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var obj = {
    'foo': 'bar'
};

defineProperty( obj, 'beep', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'boop'
});

var bool = isNonEnumerableProperty( obj, 'beep' );
// returns true

bool = isNonEnumerableProperty( obj, 'foo' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonEnumerableProperty( 'beep', 'length' );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonEnumerableProperty = require( '@stdlib/assert-is-nonenumerable-property' );

var bool = isNonEnumerableProperty( [ 'a' ], 'length' );
// returns true

bool = isNonEnumerableProperty( { 'a': 'b' }, 'a' );
// returns false

bool = isNonEnumerableProperty( [ 'a' ], 0 );
// returns false

bool = isNonEnumerableProperty( {}, 'toString' );
// returns false

bool = isNonEnumerableProperty( {}, 'hasOwnProperty' );
// returns false

bool = isNonEnumerableProperty( null, 'a' );
// returns false

bool = isNonEnumerableProperty( void 0, 'a' );
// returns false

bool = isNonEnumerableProperty( { 'null': false }, null );
// returns false

bool = isNonEnumerableProperty( { '[object Object]': false }, {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/assert/is-configurable-property`][@stdlib/assert/is-configurable-property]: test if an object's own property is configurable.
-   [`@stdlib/assert/is-enumerable-property`][@stdlib/assert/is-enumerable-property]: test if an object's own property is enumerable.
-   [`@stdlib/assert/is-nonconfigurable-property`][@stdlib/assert/is-nonconfigurable-property]: test if an object's own property is non-configurable.
-   [`@stdlib/assert/is-nonenumerable-property-in`][@stdlib/assert/is-nonenumerable-property-in]: test if an object's own or inherited property is non-enumerable.
-   [`@stdlib/assert/is-readable-property`][@stdlib/assert/is-readable-property]: test if an object's own property is readable.
-   [`@stdlib/assert/is-writable-property`][@stdlib/assert/is-writable-property]: test if an object's own property is writable.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-nonenumerable-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-nonenumerable-property

[test-image]: https://github.com/stdlib-js/assert-is-nonenumerable-property/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-nonenumerable-property/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-nonenumerable-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-nonenumerable-property?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-nonenumerable-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-nonenumerable-property/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property]: https://github.com/stdlib-js/assert-is-configurable-property

[@stdlib/assert/is-enumerable-property]: https://github.com/stdlib-js/assert-is-enumerable-property

[@stdlib/assert/is-nonconfigurable-property]: https://github.com/stdlib-js/assert-is-nonconfigurable-property

[@stdlib/assert/is-nonenumerable-property-in]: https://github.com/stdlib-js/assert-is-nonenumerable-property-in

[@stdlib/assert/is-readable-property]: https://github.com/stdlib-js/assert-is-readable-property

[@stdlib/assert/is-writable-property]: https://github.com/stdlib-js/assert-is-writable-property

<!-- </related-links> -->

</section>

<!-- /.links -->

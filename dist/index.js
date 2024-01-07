/** @license Apache-2.0 */

'use strict';

/**
* Test whether an object's own property is non-enumerable.
*
* @module @stdlib/assert-is-nonenumerable-property
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
* var isNonEnumerableProperty = require( '@stdlib/assert-is-nonenumerable-property' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': true,
*     'value': 'beep'
* });
*
* var bool = isNonEnumerableProperty( obj, 'boop' );
* // returns false
*
* bool = isNonEnumerableProperty( obj, 'beep' );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

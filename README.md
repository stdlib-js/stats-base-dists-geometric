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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Geometric

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Geometric distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-geometric
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var geometric = require( '@stdlib/stats-base-dists-geometric' );
```

#### geometric

Geometric distribution.

```javascript
var dist = geometric;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pmf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, p )`][@stdlib/stats/base/dists/geometric/cdf]</span><span class="delimiter">: </span><span class="description">geometric distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, p )`][@stdlib/stats/base/dists/geometric/logcdf]</span><span class="delimiter">: </span><span class="description">geometric distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpmf( x, p )`][@stdlib/stats/base/dists/geometric/logpmf]</span><span class="delimiter">: </span><span class="description">geometric distribution logarithm of probability mass function (PMF).</span>
-   <span class="signature">[`mgf( t, p )`][@stdlib/stats/base/dists/geometric/mgf]</span><span class="delimiter">: </span><span class="description">geometric distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pmf( x, p )`][@stdlib/stats/base/dists/geometric/pmf]</span><span class="delimiter">: </span><span class="description">geometric distribution probability mass function (PMF).</span>
-   <span class="signature">[`quantile( r, p )`][@stdlib/stats/base/dists/geometric/quantile]</span><span class="delimiter">: </span><span class="description">geometric distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( p )`][@stdlib/stats/base/dists/geometric/entropy]</span><span class="delimiter">: </span><span class="description">geometric distribution entropy.</span>
-   <span class="signature">[`kurtosis( p )`][@stdlib/stats/base/dists/geometric/kurtosis]</span><span class="delimiter">: </span><span class="description">geometric distribution excess kurtosis.</span>
-   <span class="signature">[`mean( p )`][@stdlib/stats/base/dists/geometric/mean]</span><span class="delimiter">: </span><span class="description">geometric distribution expected value.</span>
-   <span class="signature">[`median( p )`][@stdlib/stats/base/dists/geometric/median]</span><span class="delimiter">: </span><span class="description">geometric distribution median.</span>
-   <span class="signature">[`mode( p )`][@stdlib/stats/base/dists/geometric/mode]</span><span class="delimiter">: </span><span class="description">geometric distribution mode.</span>
-   <span class="signature">[`skewness( p )`][@stdlib/stats/base/dists/geometric/skewness]</span><span class="delimiter">: </span><span class="description">geometric distribution skewness.</span>
-   <span class="signature">[`stdev( p )`][@stdlib/stats/base/dists/geometric/stdev]</span><span class="delimiter">: </span><span class="description">geometric distribution standard deviation.</span>
-   <span class="signature">[`variance( p )`][@stdlib/stats/base/dists/geometric/variance]</span><span class="delimiter">: </span><span class="description">geometric distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [geometric][geometric-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Geometric( [p] )`][@stdlib/stats/base/dists/geometric/ctor]</span><span class="delimiter">: </span><span class="description">geometric distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Geometric = require( '@stdlib/stats-base-dists-geometric' ).Geometric;

var dist = new Geometric( 0.2 );

var y = dist.logpmf( 3.0 );
// returns ~-2.279

y = dist.logpmf( 2.3 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var geometric = require( '@stdlib/stats-base-dists-geometric' );

console.log( objectKeys( geometric ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-geometric.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-geometric

[test-image]: https://github.com/stdlib-js/stats-base-dists-geometric/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-geometric/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-geometric/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-geometric?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-geometric.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-geometric/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-geometric/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-geometric/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-geometric/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-geometric/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-geometric/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-geometric/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-geometric/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-geometric/main/LICENSE

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/geometric/ctor]: https://github.com/stdlib-js/stats-base-dists-geometric-ctor

[@stdlib/stats/base/dists/geometric/entropy]: https://github.com/stdlib-js/stats-base-dists-geometric-entropy

[@stdlib/stats/base/dists/geometric/kurtosis]: https://github.com/stdlib-js/stats-base-dists-geometric-kurtosis

[@stdlib/stats/base/dists/geometric/mean]: https://github.com/stdlib-js/stats-base-dists-geometric-mean

[@stdlib/stats/base/dists/geometric/median]: https://github.com/stdlib-js/stats-base-dists-geometric-median

[@stdlib/stats/base/dists/geometric/mode]: https://github.com/stdlib-js/stats-base-dists-geometric-mode

[@stdlib/stats/base/dists/geometric/skewness]: https://github.com/stdlib-js/stats-base-dists-geometric-skewness

[@stdlib/stats/base/dists/geometric/stdev]: https://github.com/stdlib-js/stats-base-dists-geometric-stdev

[@stdlib/stats/base/dists/geometric/variance]: https://github.com/stdlib-js/stats-base-dists-geometric-variance

[@stdlib/stats/base/dists/geometric/cdf]: https://github.com/stdlib-js/stats-base-dists-geometric-cdf

[@stdlib/stats/base/dists/geometric/logcdf]: https://github.com/stdlib-js/stats-base-dists-geometric-logcdf

[@stdlib/stats/base/dists/geometric/logpmf]: https://github.com/stdlib-js/stats-base-dists-geometric-logpmf

[@stdlib/stats/base/dists/geometric/mgf]: https://github.com/stdlib-js/stats-base-dists-geometric-mgf

[@stdlib/stats/base/dists/geometric/pmf]: https://github.com/stdlib-js/stats-base-dists-geometric-pmf

[@stdlib/stats/base/dists/geometric/quantile]: https://github.com/stdlib-js/stats-base-dists-geometric-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->

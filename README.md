between [![Build Status](https://travis-ci.org/ddo/between.svg?branch=master)](https://travis-ci.org/ddo/between)
=======
> get string between 2 strings

*****

## Installation

```
npm install ddo/between
```

## Usage

```js
var between = require('ddo/between');

between("hello world", 'hel', 'ld'); // => 'lo wor'
between("i'm so cool", 'm', 'oo'); // => ' so c'
```

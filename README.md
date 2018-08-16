# readar

Read text file to array of lines. Easy, sync, utf8 only, no configs required.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Why?

Because `fs` is too low-level for such kind of tasks.

## Install

```bash
npm i readar
```

## Usage

```js
const readar = require('readar');

readar('path/to/some/file'); // ['line1', 'line2', 'line3']
readar('path/to/some/dir'); // Error EISDIR: illegal operation on a directory, read
readar('path/to/nonExistent/file'); // Error ENOENT: no such file or directory, open \'path/to/nonExistent/file\'
```

## License

MIT

[npm-url]: https://npmjs.org/package/readar
[npm-image]: https://badge.fury.io/js/readar.svg
[travis-url]: https://travis-ci.org/astur/readar
[travis-image]: https://travis-ci.org/astur/readar.svg?branch=master
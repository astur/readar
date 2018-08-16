const fs = require('fs');
module.exports = path => fs
    .readFileSync(path, 'utf8')
    .split('\n')
    .filter((v, _, a) => a.length > 1 || v.length > 0);

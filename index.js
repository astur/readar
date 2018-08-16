const fs = require('fs');
module.exports = path => fs.readFileSync(path, 'utf8').split('\n');

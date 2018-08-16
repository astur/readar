const test = require('ava');
const readar = require('.');
const fs = require('fs');

test.before(t => {
    fs.mkdirSync('_dir_');
    fs.writeFileSync('_file_', '111\n222\n333', 'utf8');
});

test('readar', t => {
    t.deepEqual(readar('_file_'), ['111', '222', '333']);
    const ed = t.throws(() => readar('_dir_'));
    t.is(ed.code, 'EISDIR');
    const eb = t.throws(() => readar('_bad_'));
    t.is(eb.code, 'ENOENT');
});

test.after.always(t => {
    fs.rmdirSync('_dir_');
    fs.unlinkSync('_file_');
});

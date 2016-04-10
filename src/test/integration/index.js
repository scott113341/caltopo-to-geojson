import fs from 'fs';
import path from 'path';
import test from 'tape';

import convert from '../../index.js';

import input1 from './test-1-input.json';
import expected1 from './test-1-expected.json';


const tests = [
  [ input1, expected1 ],
];


tests.forEach(([ input, expected ], i) => {
  test(`integration test-${i + 1}`, t => {
    const output = convert(input);
    t.deepEqual(output, expected);
    t.end();
  });
});

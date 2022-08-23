import { test, assert, describe, expect } from 'vitest';
import concat from './concat';

describe('concat', function () {
  test('should shallow clone `array`', function () {
    const array = [1, 2, 3],
      actual = concat(array);

    assert.deepStrictEqual(actual, array);
    assert.notStrictEqual(actual, array);
  });

  test('should concat arrays and values', function () {
    const array = [1],
      actual = concat(array, 2, [3], [[4]]);

    assert.deepStrictEqual(actual, [1, 2, 3, [4]]);
    assert.deepStrictEqual(array, [1]);
  });

  test('should treat sparse arrays as dense', function () {
    const expected = [],
      actual = concat(Array(1), Array(1));

    expected.push(undefined, undefined);
    assert.deepStrictEqual(actual, expected);
  });
});
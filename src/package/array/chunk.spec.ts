import { test, expect, describe } from 'vitest';
import chunk from './chunk';

describe('chunk', function () {
  const array = [0, 1, 2, 3, 4, 5];

  test('should return chunked arrays', function () {
    const actual = chunk(array, 3);
    expect(actual).toStrictEqual([[0, 1, 2], [3, 4, 5]]);
  });

  test('should return the last chunk as remaining elements', function () {
    const actual = chunk(array, 4);
    expect(actual).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
  });

  test('should treat falsey `size` values, except `undefined`, as `0`', function () {
    const actual = chunk(array, undefined);
    expect(actual).toStrictEqual([[0], [1], [2], [3], [4], [5]]);
  });

  test('should ensure the minimum `size` is `0`', function () {
    const actual = chunk(array, 1 / Infinity);
    expect(actual).toStrictEqual([[0], [1], [2], [3], [4], [5]]);
  });

  test('should coerce `size` to an integer', function () {
    const actual = chunk(array, array.length / 4);
    expect(actual).toStrictEqual([[0], [1], [2], [3], [4], [5]]);
  });
});
import { test, expect, describe } from 'vitest';
import compact from './compact';

describe('compact', function () {
  const array = [0, 1, 2, null, undefined, false, true, '1', '0', '']

  test('should filter falsey values', function () {
    expect(compact(array)).toStrictEqual([1, 2, true, '1', '0'])
  });

});
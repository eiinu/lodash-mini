import { test, assert, describe } from 'vitest';
import clamp from './clamp';

describe('clamp', function () {
  test('should work with a `max`', function () {
    assert.strictEqual(clamp(5, -Infinity, 3), 3);
    assert.strictEqual(clamp(1, -Infinity, 3), 1);
  });

  test('should clamp negative numbers', function () {
    assert.strictEqual(clamp(-10, -5, 5), -5);
    assert.strictEqual(clamp(-10.2, -5.5, 5.5), -5.5);
    assert.strictEqual(clamp(-Infinity, -5, 5), -5);
  });

  test('should clamp positive numbers', function () {
    assert.strictEqual(clamp(10, -5, 5), 5);
    assert.strictEqual(clamp(10.6, -5.6, 5.4), 5.4);
    assert.strictEqual(clamp(Infinity, -5, 5), 5);
  });

  test('should not alter negative numbers in range', function () {
    assert.strictEqual(clamp(-4, -5, 5), -4);
    assert.strictEqual(clamp(-5, -5, 5), -5);
    assert.strictEqual(clamp(-5.5, -5.6, 5.6), -5.5);
  });

  test('should not alter positive numbers in range', function () {
    assert.strictEqual(clamp(4, -5, 5), 4);
    assert.strictEqual(clamp(5, -5, 5), 5);
    assert.strictEqual(clamp(4.5, -5.1, 5.2), 4.5);
  });

  test('should not alter `0` in range', function () {
    assert.strictEqual(1 / clamp(0, -5, 5), Infinity);
  });

  test('should clamp to `0`', function () {
    assert.strictEqual(1 / clamp(-10, 0, 5), Infinity);
  });

  test('should not alter `-0` in range', function () {
    assert.strictEqual(1 / clamp(-0, -5, 5), -Infinity);
  });

  test('should clamp to `-0`', function () {
    assert.strictEqual(1 / clamp(-10, -0, 5), -Infinity);
  });

  test('should return `NaN` when `number` is `NaN`', function () {
    assert.deepStrictEqual(clamp(NaN, -5, 5), NaN);
  });

  test('should coerce `min` and `max` of `NaN` to `0`', function () {
    assert.deepStrictEqual(clamp(1, -5, NaN), 0);
    assert.deepStrictEqual(clamp(-1, NaN, 5), 0);
  });
});
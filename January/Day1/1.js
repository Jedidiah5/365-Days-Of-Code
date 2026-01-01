'use strict';

/**
 * Closure-based counter with private state.
 *
 * Why this matters:
 * - Encapsulation without classes
 * - Predictable API surface
 * - Easy to test and compose
 */
function createCounter(initialValue = 0) {
  if (!Number.isFinite(initialValue)) {
    throw new TypeError('initialValue must be a finite number');
  }

  let value = initialValue;

  return Object.freeze({
    get() {
      return value;
    },

    set(nextValue) {
      if (!Number.isFinite(nextValue)) {
        throw new TypeError('nextValue must be a finite number');
      }
      value = nextValue;
      return value;
    },

    inc(step = 1) {
      if (!Number.isFinite(step)) {
        throw new TypeError('step must be a finite number');
      }
      value += step;
      return value;
    },

    dec(step = 1) {
      if (!Number.isFinite(step)) {
        throw new TypeError('step must be a finite number');
      }
      value -= step;
      return value;
    },

    reset() {
      value = initialValue;
      return value;
    },
  });
}

module.exports = { createCounter };

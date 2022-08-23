// clamp 的作用是一个目标值限制在一个目标范围以内。
// 当这个值在目标范围以外时，选择一个更近的范围内的值作为返回值。
export default function clamp(n: number, lower: number, upper: number): number {
  if (isNaN(lower)) {
    lower = 0;
  }
  if (isNaN(upper)) {
    upper = 0;
  }
  return Math.max(lower, Math.min(n, upper));
}

// /**
//  * Clamps `number` within the inclusive `lower` and `upper` bounds.
//  *
//  * @since 4.0.0
//  * @category Number
//  * @param {number} number The number to clamp.
//  * @param {number} lower The lower bound.
//  * @param {number} upper The upper bound.
//  * @returns {number} Returns the clamped number.
//  * @example
//  *
//  * clamp(-10, -5, 5)
//  * // => -5
//  *
//  * clamp(10, -5, 5)
//  * // => 5
//  */
//  function clamp(number, lower, upper) {
//   number = +number
//   lower = +lower
//   upper = +upper
//   lower = lower === lower ? lower : 0
//   upper = upper === upper ? upper : 0
//   if (number === number) {
//     number = number <= upper ? number : upper
//     number = number >= lower ? number : lower
//   }
//   return number
// }

// export default clamp
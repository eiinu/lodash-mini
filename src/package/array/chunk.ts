export default function chunk(arr: Array<any>, size: number = 1): Array<any> {
  size = Math.floor(size);
  if (size > 0) {
    const res = [];
    const len = Math.floor(arr.length / size);
    let i = 0;
    for (; i < len; i++) {
      const item = [];
      for (let j = i * size; j < (i + 1) * size; j++) {
        item.push(arr[j]);
      }
      res.push(item);
    }
    const item = [];
    for (let j = i * size; j < arr.length; j++) {
      item.push(arr[j]);
    }
    if (item.length !== 0) {
      res.push(item);
    }
    return res;
  } else if (size === 0) {
    return chunk(arr, 1);
  } else {
    return arr.slice();
  }
}

// import slice from './slice.js'
// import toInteger from './toInteger.js'

// /**
//  * Creates an array of elements split into groups the length of `size`.
//  * If `array` can't be split evenly, the final chunk will be the remaining
//  * elements.
//  *
//  * @since 3.0.0
//  * @category Array
//  * @param {Array} array The array to process.
//  * @param {number} [size=1] The length of each chunk
//  * @returns {Array} Returns the new array of chunks.
//  * @example
//  *
//  * chunk(['a', 'b', 'c', 'd'], 2)
//  * // => [['a', 'b'], ['c', 'd']]
//  *
//  * chunk(['a', 'b', 'c', 'd'], 3)
//  * // => [['a', 'b', 'c'], ['d']]
//  */
// function chunk(array, size = 1) {
//   size = Math.max(toInteger(size), 0)
//   const length = array == null ? 0 : array.length
//   if (!length || size < 1) {
//     return []
//   }
//   let index = 0
//   let resIndex = 0
//   const result = new Array(Math.ceil(length / size))

//   while (index < length) {
//     result[resIndex++] = slice(array, index, (index += size))
//   }
//   return result
// }

// export default chunk
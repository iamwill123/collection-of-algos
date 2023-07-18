/**
 * @module src/lib/iteration/licenseKeyFormatting
 * @param {string} s - The string to format
 * @param {number} k - The number of characters to group together
 * @returns {string} - The formatted string
 *
 * @example
 * import { licenseKeyFormatting } from './lib/iteration';
 *
 * const s = '5F3Z-2e-9-w';
 * const k = 4;
 * const formatted = licenseKeyFormatting(s, k);
 * console.log(formatted); // '5F3Z-2E9W'
 *
 * const s = '2-5g-3-J';
 * const k = 2;
 * const formatted = licenseKeyFormatting(s, k);
 * console.log(formatted); // '2-5G-3J'
 *
 **/

const licenseKeyFormatting = (s: string, k: number): string => {
  // keep track of the number of characters we have added
  let count = 0;
  // result is an empty string, we will add to it
  let result = '';

  // remove all dashes and make the string uppercase
  // can also use: s = s.toUpperCase().split('-').join('');
  s = s.replace(/-/g, '').toUpperCase();
  const n = s.length;

  // iterate over the string backwards
  for (let i = n - 1; i >= 0; i--) {
    // add the last character to the front of the result
    result = s[i] + result;
    // increment the count
    count++;

    // if the count is equal to k and we are not at the beginning of the string
    if (count === k && i !== 0) {
      // add a dash to the front of the result
      result = '-' + result;
      // reset the count
      count = 0;
    }
  }

  return result;
};

export default licenseKeyFormatting;

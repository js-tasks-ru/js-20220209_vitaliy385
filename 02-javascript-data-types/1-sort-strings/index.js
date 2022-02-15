/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
const arr = ['b', 'c', 'a'];

export function sortStrings(arr, param = 'asc') {
  let new_arr = [...arr];
  if (param === 'asc') {
    return new_arr.sort(
      function (a, b) {
        return a.localeCompare(b, ['ru', 'eng'], {caseFirst: 'upper'});
      });
  } else if (param === 'desc') {
    return new_arr.sort(
      function (a, b) {
        return b.localeCompare(a, ['ru', 'eng'], {caseFirst: 'upper'});
      });
  }
}


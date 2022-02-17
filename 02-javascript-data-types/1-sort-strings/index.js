/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
const arr = ['b', 'c', 'a'];

export function sortStrings(arr, param = 'asc') {
  let newArray = [...arr];
  const directions = {
    asc: 1,
    desc: -1
  };
  const direction = directions[param];
  // return parameter1.localeCompare(parameter2, ['ru', 'eng'], {caseFirst: 'upper'});
  return newArray.sort(function(string1, string2)  {
   return  direction * string1.localeCompare(string2, ['ru', 'eng'], {caseFirst: 'upper'});
  });
}


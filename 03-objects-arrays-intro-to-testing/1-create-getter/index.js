/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let arr = path.split('.');
  const getter = obj => {
    if (arr.length < 2) {
      return obj[arr[0]];
    } else {
      let first;
      [first, ...arr] = arr;
      obj = obj[first];
      if (obj) {
        return getter(obj, arr);
      }
    }
  };
  return getter;
}


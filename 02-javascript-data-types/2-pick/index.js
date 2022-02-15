/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let new_obj = {};
  for (let i in fields) {
    if (obj.hasOwnProperty(fields[i])) {
      new_obj[fields[i]] = obj[fields[i]];
    }
  }
  return new_obj;
};

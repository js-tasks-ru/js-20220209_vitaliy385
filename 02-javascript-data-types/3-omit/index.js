/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let new_obj = Object.assign({}, obj);
  for (let i in fields) {
    if (obj.hasOwnProperty(fields[i])) {
      delete new_obj[fields[i]];
    }

  }
  return new_obj;
};

/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const counter = new Map();
  let result = '';
  let prevSymbol;

  if ((size === 0) || (string.length === 0)) {
    return result;
  } else if (!size) {
    return string;

  } else {

    for (const symbol of string) {

      if (counter.has(symbol)) {

        if (counter.get(symbol) < size) {
          counter.set(symbol, counter.get(symbol) + 1);
          result += symbol;
          prevSymbol = symbol;
        }

      } else {
        counter.delete(prevSymbol);
        counter.set(symbol, 1);
        result += symbol;
        prevSymbol = symbol;
      }
    }
    return result;
  }
}

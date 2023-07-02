/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return;
  }
    
  const properties = Object.entries(obj);
  const output = {};

  for (const [key, value] of properties) {
    output[value] = key;
  }

  return output;
}

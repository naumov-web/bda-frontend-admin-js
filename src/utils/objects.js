export const removeEmptyFields = (obj) => {
  const result = {};

  for(let k in obj) {
    if (typeof(obj[k]) !== 'undefined') {
      result[k] = obj[k];
    }
  }

  return result;
};
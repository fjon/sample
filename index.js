module.exports = function sampla(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Sample needs a string!');
  }
  return string.replace(/\s/g, '');
}
const names = require('./names');

const nameList = Array.from(new Set(names.sort())).filter(name => name.length > 3).map(name => name.replaceAll("'", ""));

function getInitialListLength(letter) {
  return getNamesByInitial(letter).length;
};

function getNamesByInitial(letter) {
  return nameList.filter(name => name[0] === letter.toUpperCase() || name[0] === letter.toLowerCase());
};

module.exports = {
  getNamesByInitial,
  getInitialListLength
};
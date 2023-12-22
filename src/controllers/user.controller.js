const { getRandomNumber, getShuffleAbbreviation } = require('../functions/engines.function');

const firstNames = require('../models/first-names.model');
const secondNames = require('../models/second-names.model');

const getRandomFirstName = (letter) => {
  const firstNamesWithInitial = firstNames.filter(name => name[0].toUpperCase() === letter);
  const firstNamesWithInitialLength = firstNamesWithInitial.length;
  return firstNamesWithInitial[getRandomNumber(firstNamesWithInitialLength)];
}

const getRandomSecondName = (letter) => {
  const secondNamesWithInitial = secondNames.filter(name => name[0].toUpperCase() === letter);
  const secondNamesWithInitialLength = secondNamesWithInitial.length;
  return secondNamesWithInitial[getRandomNumber(secondNamesWithInitialLength)];
}

const getRandomBornDate = () => {
  const today = new Date();
  const shuffleAge = getRandomNumber(100);
  const shuffleMonth = getRandomNumber(12);
  const shuffleDay = getRandomNumber(31);

  const yearSet = new Date(new Date().setYear(today.getUTCFullYear() - shuffleAge));
  const monthSet = new Date(yearSet.setMonth(yearSet.getUTCMonth() - shuffleMonth));
  const daySet = new Date(monthSet.setUTCDate(monthSet.getDay() - shuffleDay));

  return daySet;
}

const generateRandomPerson = () => {
  const shuffleAbbreviation = getShuffleAbbreviation(3);

  const firstLetter = shuffleAbbreviation[0];
  const secondLetter = shuffleAbbreviation[1];
  const thirdLetter = shuffleAbbreviation[2];

  const fullName = getRandomFirstName(firstLetter) + ' ' + getRandomSecondName(secondLetter) + ' ' + getRandomSecondName(thirdLetter);

  return {
    name: fullName,
    bornIn: getRandomBornDate()
  };
}

module.exports = {
  generateRandomPerson
}
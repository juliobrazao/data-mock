const { getRandomNumber, getShuffleAbbreviation } = require('../functions/engines.function');

const firstNames = require('../models/first-names.model');
const secondNames = require('../models/second-names.model');
const streets = require('../models/streets.model');
const cities = require('../models/cities.model');
const states = require('../models/states.model');

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

const getRandomStreetName = (letter) => {
  const streetNamesWithInitial = streets.filter(street => street[0].toUpperCase() === letter);
  const streetNamesWithInitialLength = streetNamesWithInitial.length;
  return streetNamesWithInitial[getRandomNumber(streetNamesWithInitialLength)];
}

const getRandomCityName = (letter) => {
  const cityNamesWithInitial = cities.filter(city => city[0].toUpperCase() === letter);
  const cityNamesWithInitialLength = cityNamesWithInitial.length;
  return cityNamesWithInitial[getRandomNumber(cityNamesWithInitialLength)];
}

const getRandomStateName = (letter) => {
  const stateNamesWithInitial = states.filter(state => state[0].toUpperCase() === letter);
  const stateNamesWithInitialLength = stateNamesWithInitial.length;
  return stateNamesWithInitial[getRandomNumber(stateNamesWithInitialLength)];
}

const generateRandomPerson = () => {
  const shuffleAbbreviation = getShuffleAbbreviation(2);

  const firstLetter = shuffleAbbreviation[0];
  const secondLetter = shuffleAbbreviation[1];

  const letterForStreet = getRandomFirstName(firstLetter)[1];
  const letterForCity = getRandomFirstName(firstLetter)[2];
  const letterForState = getRandomFirstName(firstLetter)[3];

  const streetPreffix = !!(getRandomNumber(9)/2) ? 'R.' : 'Av.';

  const fullName = getRandomFirstName(firstLetter) + ' ' + getRandomSecondName(secondLetter);
  const streetName = streetPreffix + ' ' + getRandomStreetName(letterForStreet.toUpperCase()) + ', ' + getRandomNumber(9999);
  const zipCode = getRandomNumber(99999).toString().padStart(5, '0') + '-' + getRandomNumber(999).toString().padStart(3, '0');
  const cityName = getRandomCityName(letterForCity.toUpperCase());
  const stateName = getRandomStateName(letterForState.toUpperCase());

  return {
    name: fullName,
    street: streetName,
    zipCode,
    location: cityName,
    province: stateName
  }
}

module.exports = {
  generateRandomPerson
}
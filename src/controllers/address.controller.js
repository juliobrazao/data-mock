const { getRandomNumber, getShuffleAbbreviation } = require('../functions/engines.function');

const streets = require('../models/streets.model');
const cities = require('../models/cities.model');
const states = require('../models/states.model');

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

const generateRandomAddress = () => {
  const shuffleAbbreviation = getShuffleAbbreviation(3);
  const letterForStreet = shuffleAbbreviation[0];
  const letterForCity = shuffleAbbreviation[1];
  const letterForState = shuffleAbbreviation[2];
  const streetPreffix = !!(getRandomNumber(9)/2) ? 'R.' : 'Av.';
  const streetName = streetPreffix + ' ' + getRandomStreetName(letterForStreet.toUpperCase());
  const streetNumber = getRandomNumber(999).toString().padStart(3, '0');
  const zipCode = getRandomNumber(99999).toString().padStart(5, '0');
  const cityName = getRandomCityName(letterForCity.toUpperCase());
  const stateName = getRandomStateName(letterForState.toUpperCase());

  return {
    street: streetName,
    number: streetNumber,
    zipCode,
    location: cityName,
    province: stateName
  }
}

module.exports = {
  generateRandomAddress
}
function getRandomNumber(number) {
  maxValue = Math.max(0, Math.floor(number));
  return Math.floor(Math.random() * maxValue);
}

function getShuffleAbbreviation(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shuffledCharacters = characters
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  const abbreviation = shuffledCharacters.substring(0, length);
  return abbreviation;
}

module.exports = {
  getRandomNumber,
  getShuffleAbbreviation
}
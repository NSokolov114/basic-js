const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity > 15 || sampleActivity < 1 || typeof sampleActivity !== 'string') return false;
  return (isNaN(sampleActivity * 7)) ? false : Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) * HALF_LIFE_PERIOD / 0.693);
};

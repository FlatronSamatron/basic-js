const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw 'Not implemented';

  if (typeof sampleActivity != 'string' || sampleActivity>15 || sampleActivity<=0 || Number.isNaN(parseFloat(sampleActivity))){return false;}

  let rate = 0.693 / HALF_LIFE_PERIOD,
        year = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / rate;

    return Math.ceil(year);
};

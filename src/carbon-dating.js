const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
        if (sampleActivity && typeof sampleActivity == 'string'){
          numericValue = parseFloat(sampleActivity);
          if (numericValue > 0 && numericValue < MODERN_ACTIVITY){
            return Math.ceil(Math.log(MODERN_ACTIVITY / numericValue) * HALF_LIFE_PERIOD / 0.693);
          }
        }
      return false;
};
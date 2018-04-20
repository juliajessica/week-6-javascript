import { galacticAge } from './../src/galactic-age.js';

describe('galacticAge', function() {

  it('should return return a person’s age', function() {
    let testAge = new galacticAge(25);
    expect(testAge.age).toEqual(25);
  });

  it('should return person’s age in years and convert it into seconds', function() {
    let testAge = new galacticAge(25);
    let output = testAge.getSeconds(testAge.age);
    expect(output).toEqual(788400000);
  });

  it('should will take two dates and determine the difference in seconds between the two.', function() {
    let testAge = new galacticAge("06/07/1993", "04/20/2018");
    let output = testAge.getSecondsDate(testAge.difference);
    // expect(testAge.age).toEqual(25);
  });

});

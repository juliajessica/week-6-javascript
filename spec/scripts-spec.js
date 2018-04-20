import { galacticAge } from './../src/galactic-age.js';

describe('galacticAge', function() {

  it('should return return a person’s age', function() {
    let testAge = new galacticAge(25);
    expect(testAge.age).toEqual(25);
  });

  it('should return person’s age in years and convert it into seconds', function() {
    let testAge = new galacticAge(25);
    let output = testAge.getSeconds(testAge.age);
    // let testAget = parseInt(testAge);
    expect(output).toEqual(788400000);
  });
});

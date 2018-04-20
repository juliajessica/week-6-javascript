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

  it('The program will return the age of a human in Mercury years.', function() {
    let testAge = new galacticAge(12);
    let output = testAge.getAgeMercury(testAge.age);
    expect(output).toEqual(49.77272727272727);
  });

  // it('should will take two dates and determine the difference in seconds between the two.', function() {
  //   let testDate1 = new galacticAge(1993, 06, 07); //first date
  //   let testDate2 = new galacticAge(2030, 06, 07); //second date
  //   let diff = t1.getTime();
  //   let diff2 = t2.getTime();
  //   let calc = diff - diff2;
  //   let difference = calc / 1000;
  //   let calculation = Math.abs(difference);
  //   return calculation;
  // });

});

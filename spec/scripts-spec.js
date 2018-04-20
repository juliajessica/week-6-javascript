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

  it('should return the age of a human in Mercury years.', function() {
    let testAge = new galacticAge(25);
    let output = testAge.getAgeMercury(testAge.age);
    // let output = convertAge.tofixed(9);
    expect(output).toEqual(103.69318181818181);
  });

  it('should return the age of a human in Venus years', function() {
    let testAge = new galacticAge(24);
    let output = testAge.getAgeVenus(testAge.age);
    expect(output).toEqual(38.93333333333333);
  });

  it('should return the age of a human in Mars years', function() {
    let testAge = new galacticAge(24);
    let output = testAge.getAgeVenus(testAge.age);
    expect(output).toEqual(12.7510917031);
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

import { galacticAge } from './../src/galactic-age.js';

describe('galacticAge', function() {

  it('should return return a person’s age', function() {
    let testAge = new galacticAge(25);
    expect(testAge.age).toEqual(25);
  });

  it('should return person’s age in years and convert it into seconds', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getSeconds(testAge.age);
    let output = `You are ${calculate} seconds old!`
    expect(output).toEqual("You are 788400000 seconds old!");
  });

  // it('should take two dates and determine the difference in seconds, between the two', function() {
  //   let testAge = new galacticAge(06/07/1993, 06/07/2030);
  //   let output = testAge.getSecondsDate(testAge.date1, testAge.date2);
  //   // let output = parseInt(convert); do this in the UI
  //   expect(output).toEqual(7.838836349461016e-9);
  // });

  it('should return the age of a human in Mercury years.', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeMercury(testAge.age);
    let output = `On Mercury you are ${calculate} years old!`
    // let output = convertAge.tofixed(9);
    expect(output).toEqual("On Mercury you are 103.69318181818181 years old!");
  });

  it('should return the age of a human in Venus years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeVenus(testAge.age);
    let output = `On Venus you are ${calculate} years old!`
    expect(output).toEqual("On Venus you are 40.55555555555556 years old!");
  });

  it('should return the age of a human in Mars years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeMars(testAge.age);
    let output = `On Mars you are ${calculate} years old!`
    expect(output).toEqual("On Mars you are 13.282387190684133 years old!");
  });

  it('should return the age of a human in Jupiter years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeJupiter(testAge.age);
    let output = `On Jupiter you are ${calculate} years old!`
    expect(output).toEqual("On Jupiter you are 773.3050847457627 years old!");
  });

  it('should calculate life expectancy on Earth', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyAge(testAge.age);
    let output = `This is your life expectancy on Earth: ${calculate}!`
    expect(output).toEqual("This is your life expectancy on Earth: 62!");
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

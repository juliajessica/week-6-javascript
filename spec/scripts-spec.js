import { galacticAge } from './../src/galactic-age.js';

describe('galacticAge', function() {

  it('should return return a person’s age', function() {
    let testAge = new galacticAge(25);
    expect(testAge.year).toEqual(25);
  });

  it('should return person’s age in years and convert it into seconds', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getSeconds(testAge.year);
    let output = `You are ${calculate} seconds old!`;
    expect(output).toEqual("You are 788940000 seconds old!");
  });

// it('should take two dates and determine the difference in seconds, between the two', function() {
//   let testAge = new galacticAge(06/07/1993, 06/07/2030);
//   let output = testAge.getSecondsDate(testAge.date1, testAge.date2);
//   // let output = parseInt(convert); do this in the UI
//   expect(output).toEqual(7.838836349461016e-9);
// });

  it('should return the age of a human in Mercury years.', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeMercury(testAge.year);
    let output = `On Mercury you are ${calculate} years old!`;
    // let output = convertAge.tofixed(9);
    expect(output).toEqual("On Mercury you are 104 years old!");
  });

  it('should return the age of a human in Venus years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeVenus(testAge.year);
    let output = `On Venus you are ${calculate} years old!`;
    expect(output).toEqual("On Venus you are 41 years old!");
  });

  it('should return the age of a human in Mars years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeMars(testAge.year);
    let output = `On Mars you are ${calculate} years old!`;
    expect(output).toEqual("On Mars you are 13 years old!");
  });

  it('should return the age of a human in Jupiter years', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.getAgeJupiter(testAge.year);
    let output = `On Jupiter you are ${calculate} years old!`;
    expect(output).toEqual("On Jupiter you are 774 years old!");
  });

  it('should calculate life expectancy on Earth', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyAge(testAge.year);
    let output = `This is your life expectancy on Earth: ${calculate}!`;
    expect(output).toEqual("This is your life expectancy on Earth: 56!");
  });

  it('should calculate life expectancy on Earth to life expectancy on Mercury', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyMercury(testAge.year);
    let output = `This is your life expectancy on Mercury: ${calculate}!`;
    expect(output).toEqual("This is your life expectancy on Mercury: 233!");
  });

  it('should calculate life expectancy on Earth to life expectancy on Venus', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyVenus(testAge.year);
    let output = `This is your life expectancy on Venus: ${calculate}!`;
    expect(output).toEqual("This is your life expectancy on Venus: 90!");
  });

  it('should calculate life expectancy on Earth to life expectancy on Mars', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyMars(testAge.year);
    let output = `This is your life expectancy on Mars: ${calculate}!`;
    expect(output).toEqual("This is your life expectancy on Mars: 30!");
  });

  it('should calculate life expectancy on Earth to life expectancy on Jupiter', function() {
    let testAge = new galacticAge(25);
    let calculate = testAge.expectancyJupiter(testAge.year);
    let output = `This is your life expectancy on Jupiter: ${calculate}!`;
    expect(output).toEqual("This is your life expectancy on Jupiter: 5!");
  });
});

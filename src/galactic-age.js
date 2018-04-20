class galacticAge {
  constructor(age, expectancy, date1, date2) {
    this.age = age;
    this.expectancy = 87;
    this.date1 = new Date(date1);
    this.date2 = new Date(date2);
    // this.planet = ["mercury", "venus", "mars"];
    // this.ageToDays = age * 365;
  }

  getSecondsDate() {
    // let date1 = str1.split('/');
    let startDate = this.date1;
    // let startDateNum = Date.parse(startDate);
    let endDate = this.date2;
    // let endDateNum = Date.parse(endDate);
    let seconds = Math.abs((startDate.getTime() - endDate.getTime()) / 1000);
    // let seconds = (startDate - endDate) / 1000;
    return seconds;
  }



  getSeconds(userAge) { //seconds in a year
    let ageToSeconds = userAge;
    let calculatedAge = ageToSeconds;
    return calculatedAge * 365 * 24 * 60 * 60;
  }

  getAgeMercury(userAge){
    let age = userAge * 365;
    let mercuryAge = age / 88; //days
    return mercuryAge;
  }

  getAgeVenus(userAge){
    let age = userAge * 365;
    let venusAge = age / 225; //days
    return venusAge;
  }

  getAgeMars(userAge){
    let age = userAge * 365;
    let marsAge = age / 687;//days
    return marsAge;
  }

  getAgeJupiter(userAge){
    let age = userAge * 365;
    let jupiterAge = age / 11.8;//days
    return jupiterAge;
  }

  expectancyAge(userAge){
    const age = userAge;
    let leftToLive = this.expectancy - age;
    return leftToLive;
  }

  // expectancyEarth(userAge){
  //   const age = userAge;
  //   let leftToLive = age - this.expectancy;
  //   if (leftToLive > 87){
  //     return LeftToLive;
  //   }
  // }

  // getSecondsDate(userDate1, userDate2) {
  //   let testDate1 = userDate1;
  //   let testDate2 = userDate2;
  //   let diff = testDate1.getTime() - testDate2.getTime();
  //   let difference = diff / 1000;
  //   let calculation = Math.abs(difference);
  //   return calculation;
  // }


} //closes class

export { galacticAge };

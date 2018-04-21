class galacticAge {
  constructor(year) {
    this.year = year;
    this.lifeExpectancy = 81; //average
    // this.date1 = new Date(date1);
    // this.date2 = new Date(date2);
  }
  // getSecondsDate() {
  //   // let date1 = str1.split('/');
  //   let startDate = this.date1;
  //   // let startDateNum = Date.parse(startDate);
  //   let endDate = this.date2;
  //   // let endDateNum = Date.parse(endDate);
  //   let seconds = Math.abs((startDate.getTime() - endDate.getTime()) / 1000);
  //   // let seconds = (startDate - endDate) / 1000;
  //   return seconds;
  // }

  getSeconds() { //seconds in a year
    const calculatedAge = this.year * 365.25 * 24 * 60 * 60;
    return calculatedAge;
  }

  getAgeMercury(userAge){
    let age = userAge * 365.25;
    let mercuryAge = age / 88; //days
    let calculate = mercuryAge.toFixed();
    return calculate;
  }

  getAgeVenus(userAge){
    let age = userAge * 365.25;
    let venusAge = age / 225; //days
    let calculate = venusAge.toFixed();
    return calculate;
  }

  getAgeMars(userAge){
    let age = userAge * 365.25;
    let marsAge = age / 687;//days
    let calculate = marsAge.toFixed();
    return calculate;
  }

  getAgeJupiter(userAge){
    let age = userAge * 365.25;
    let jupiterAge = age / 11.8;//days
    let calculate = jupiterAge.toFixed();
    return calculate;
  }

  expectancyAge(userAge){ //on earth
    let age = userAge;
    let leftToLive = this.lifeExpectancy - age;
    let convertToPositive = Math.abs(leftToLive);
    return convertToPositive;
    }

  expectancyMercury(userAge){
    let age = userAge;
    let leftToLive = Math.round((this.lifeExpectancy - age) /.24); //mercury year
    return leftToLive;
    }

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

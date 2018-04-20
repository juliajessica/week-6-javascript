class galacticAge {
  constructor(age) {
    this.age = age;
    // this.planet = ["mercury", "venus", "mars"];
    // this.ageToDays = age * 365;
  }

  getSeconds(userAge) {
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

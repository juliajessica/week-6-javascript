class galacticAge {
  constructor(age=0) {
    this.age = age;
  }

  getSeconds(userAge) {
    let ageToSeconds = userAge;
    let calculatedAge = ageToSeconds;
    return calculatedAge * 365 * 24 * 60 * 60;
  }


  // ageToSeconds.toFixed();
} //closes class

export { galacticAge };

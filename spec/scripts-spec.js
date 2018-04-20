import { galacticAge } from './../src/galactic-age.js';

describe('galacticAge', function() {

  it('should return converted age from user into seconds', function() {
    let testAge = new galacticAge("25");
    expect(testAge.age).toEqual("25");
  });
});

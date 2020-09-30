const { promptValidator } = require("../src/index");

describe('Prompt Validator', () => {
    it('Number 1 through 5 is valid input', () => {
        expect(promptValidator.test("5")).toEqual(true);
      });

    it('Empty string does not match', () => {
      expect(promptValidator.test("")).toEqual(false);
    });
  });
const { scorePatientTherapistsMatch, therapistMatch } = require("../src/therapistMatch");

describe('Patient Match', () => {
    it('All 5 return true and returns 5', () => {
        let testPatient = {drinking: 5, smoking: 5, notSleeping: 5, unhealthyEating: 5, eatingDisorder: 5};
        let testTherapist = {
            name: "Joe Diaz",
            description: "Joe is proficient in helping people with trait 'notSleeping' only and is the best at it.",
            drinking: (value) => {
                return value === 5
            },
            smoking: (value) => {
                return value === 5
            },
            notSleeping: (value) => {
                return value === 5
            },
            unhealthyEating: (value) => {
                return value === 5
            },
            eatingDisorder: (value) => {
                return value === 5
            }
        };
        expect(scorePatientTherapistsMatch(testPatient, testTherapist)).toEqual(5);
      });

      it('Matches with therapist that has a higher score with therapist', () => {
        let testPatient = {drinking: 5, smoking: 5, notSleeping: 5, unhealthyEating: 5, eatingDisorder: 5};
        let testTherapist1 = {
            name: "Joe Diaz",
            description: "Joe is proficient in helping people with trait 'notSleeping' only and is the best at it.",
            drinking: (value) => {
                return value === 5
            },
            smoking: (value) => {
                return value === 5
            },
            notSleeping: (value) => {
                return value === 5
            },
            unhealthyEating: (value) => {
                return value === 5
            },
            eatingDisorder: (value) => {
                return value === 5
            }
        };

        let testTherapist2 = {
            name: "Stephanie Ramon",
            description: "Joe is proficient in helping people with trait 'notSleeping' only and is the best at it.",
            drinking: (value) => {
                return value != 5
            },
            smoking: (value) => {
                return value === 5
            },
            notSleeping: (value) => {
                return value === 5
            },
            unhealthyEating: (value) => {
                return value === 5
            },
            eatingDisorder: (value) => {
                return value === 5
            }
        };
        expect(therapistMatch(testPatient, [testTherapist1, testTherapist2])).toEqual("Joe Diaz");
      });
  });
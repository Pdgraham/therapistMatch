export const therapists = [
    {
        name: "Jane Doe",
        description: "Jane is proficient in helping people with traits 'drinking' and 'smoking'",
        drinking: (value) => {
            return value > 3
        },
        smoking: (value) => {
            return value > 3
        },
        notSleeping: (value) => {
            return value <= 3
        },
        unhealthyEating: (value) => {
            return value <= 3
        },
        eatingDisorder: (value) => {
            return value <= 3
        }
    },
    {
        name: "Joe Diaz",
        description: "Joe is proficient in helping people with trait 'notSleeping' only and is the best at it.",
        drinking: (value) => {
            return value <= 2
        },
        smoking: (value) => {
            return value <= 2
        },
        notSleeping: (value) => {
            return value >= 4
        },
        unhealthyEating: (value) => {
            return value <= 2
        },
        eatingDisorder: (value) => {
            return value <= 2
        }
    },
    {
        name: "Jack Daniels",
        description: "Jack is proficient in helping people with high smoking, unhealthy eating and low drinking traits.",
        drinking: (value) => {
            return value <= 2
        },
        smoking: (value) => {
            return value >= 4
        },
        notSleeping: (value) => {
            return value <= 3
        },
        unhealthyEating: (value) => {
            return value <= 3
        },
        eatingDisorder: (value) => {
            return value >= 4
        }
    }
];
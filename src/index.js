const prompt = require('prompt');
const { therapistMatch, behaviors } = require("./therapistMatch");
const { therapists } = require("./therapists");

const prompts = [{
                    name: "drinking",
                    description: "How prone are you to exhibit behavior drinking?"
                }, {
                    name: "smoking",
                    description: "How prone are you to exhibit behavior smoking?"
                }, {
                    name: "notSleeping",
                    description: "How prone are you to exhibit behavior not sleeping?"
                }, {
                    name: "unhealthyEating",
                    description: "How prone are you to exhibit behavior not eating healthy?"
                }, {
                    name: "eatingDisorder",
                    description: "How prone are you to exhibit behavior eating disorder?"
                }];
export const promptValidator = RegExp(/^[1-5]{1}$/);
const promptWarning = "Please enter a number on a scale of 1 to 5, 1 being not often and 5 being very often";

const questionValidator = prompts.map(prompt => ({
    description: prompt.description,
    name: prompt.name,
    type: "string",
    validator: promptValidator,
    warning: promptWarning,
    required: true
    })
);

console.log("We want to match you with a therapist that is best fit to support your lifestyle.");
console.log("Please answer the following questions using a scale from 1 to 5, 1 being not often or never and 5 being very often.");

prompt.start();

prompt.get(questionValidator, function (err, result) {
    if (err) { 
        return onErr(err); 
    }
    let patientBehaviors = {};
    for (let behavior of behaviors) {
        patientBehaviors[behavior] = result[behavior];
    }
    let bestTherapistMatch = therapistMatch(patientBehaviors, therapists);
    console.log("We found a great therapist match for you, their name is: " + bestTherapistMatch);
});

function onErr(err) {
    console.log(err);
    return 1;
}
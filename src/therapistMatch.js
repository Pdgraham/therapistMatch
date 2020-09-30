export const behaviors = [ "drinking", "smoking", "notSleeping", "unhealthyEating", "eatingDisorder"];

export const therapistMatch = (rankings, therapists) => {
    let bestMatch;
    let bestScore = 0;

    for (let index = 0; index < therapists.length; index ++) {
        let therapistMatchScore = scorePatientTherapistsMatch(rankings, therapists[index]);

        if (bestScore < therapistMatchScore) {
            bestMatch = therapists[index]["name"];
            bestScore = therapistMatchScore;
        }
    }

    return bestMatch;
}

export const scorePatientTherapistsMatch = (rankings, therapist) => {
    let score = 0;
    for (let index = 0; index < behaviors.length; index++) {

        let behavior = behaviors[index];
        let behaviorValue = parseInt(rankings[behavior]);

        if (therapist[behavior](behaviorValue)) {
            score += 1;
        }
    }
    return score;
}
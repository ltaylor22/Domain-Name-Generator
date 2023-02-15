let pronoun = ['the', 'our'];
let adj = ['brave', 'adventurous', 'happy'];
let noun = ['shark', 'starfish', 'seahorse'];
let website = ['.com', '.net'];

function randomIndex (arr) {
    return Math.floor(Math.random() * arr.length);
}

function randomValue (arr) {
    const rIndex = randomIndex (arr);
    return arr[rIndex];
}

function randomDomain (arrayPronoun, arrayAdj, arrayNoun, arrayWebsite) {
    return randomValue(arrayPronoun) + '' + randomValue(arrayAdj) + '' + randomValue(arrayNoun) + '' + randomValue(arrayWebsite);
}


for (let one of pronoun) {
    for (let two of adj) {
        for (let three of noun){
            for (let four of website) {
                console.log(one+two+three+four);
            }
        }
    }
}
        

    

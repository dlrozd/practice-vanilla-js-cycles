// data

const scores = [
    54, 22, 32, 11, 33,
    44, 22, 26, 74, 92,
    90, 84, 43, 67, 92,
    90, 53, 33, 11, 23
]

const costs = [
    .54, .22, .32, .11, .33,
    .44, .22, .26, .74, .92,
    .90, .84, .43, .67, .92,
    .90, .53, .33, .11, .23
]

// cycle while

// let count = 0;
// let result;
//
// while (count < scores.length) {
//     result = 'you have' + ' ' + count + ' ' + 'and score' + ' ' + scores[count];
//     console.log(result);
//     count = count + 1;
// }
//
// console.log('total scores: ' + scores.length)

// cycle for

// logic

const bestScore = printAndGetHighScore(scores);
const bestScores = getBestScores(scores, bestScore);
const bestIndex = getBestCostAndScore(scores, costs, bestScore);


function getBestScores(array, maxValue) {
    let bestScores = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
            bestScores.push(i);
        }
    }
    return bestScores;
}

function printAndGetHighScore(array) {
    let result;
    let highScore = 0;

    for (let i = 0; i < array.length; i++) {
        result = 'Index' + ' ' + i + ' ' + 'and score' + ' ' + array[i];
        if (highScore < array[i]) {
            highScore = array[i];
        }
        console.log(result);
    }
    return highScore;
}

function getBestCostAndScore(resultArray, costsArray, maxValue) {
    let index;
    let cost = 100;

    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] === maxValue) {
            if (costsArray[i] < cost) {
                cost = costsArray[i];
                index = i;
            }
        }
    }
    return index
}


console.log('All scores are: ' + scores.length)
console.log('Highest score from data is: ' + bestScore)
console.log('Best scores of indexes are' + ' ' + bestScores + ' ' + 'and' + ' ' + 'it is the number' + ' ' + bestScore)
console.log('Best index is: ' + bestIndex);


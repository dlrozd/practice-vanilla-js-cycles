const scores = [
    54, 22, 32, 11, 33,
    44, 22, 26, 74, 92,
    90, 84, 43, 67, 92,
    90, 53, 33, 11, 23
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


const bestScore = printAndGetHighScore(scores);
const bestScores = getBestScores(scores, bestScore);

function getBestScores(array, value) {
    let bestScores = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
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

console.log('All scores: ' + scores.length)
console.log('Highest score from data: ' + bestScore)
console.log('Best scores of indexes' + ' ' + bestScores + ' ' + 'are' + ' ' + 'number' + ' ' + bestScore)

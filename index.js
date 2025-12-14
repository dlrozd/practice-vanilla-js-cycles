const scores = [54, 22, 32, 11, 33, 44, 22, 26, 74, 92, 90, 84, 43, 67]

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

// let result;

for (let i = 0; i < scores.length; i++) {
    result = 'you have' + ' ' + i + ' ' + 'and score' + ' ' + scores[i];
    console.log(result);
}

console.log('all scores: ' + scores.length)
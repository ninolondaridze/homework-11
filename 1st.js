let answerFirst = prompt('1st number:');
let answerSecond = prompt('2nd number:');

if (isNaN(answerFirst || answerSecond)) {
    alert('please, enter only numbers');
}

let sum = Number(answerFirst) + Number(answerSecond);
let product = answerFirst * answerSecond;

alert(`The sum of ${answerFirst} and ${answerSecond} is: ${sum}; The product is ${product}`);
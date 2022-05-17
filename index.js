// Code your solutions in this file

function writeCards (cards, surprise) {
    let firstArr = [];
    for (let i = 0; i < cards.length; i++){
        firstArr.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
    }
    return firstArr;
}

function countDown () {
    let number = 11;
    while (number > 0) {
        number--;
        console.log(number);
    }
}
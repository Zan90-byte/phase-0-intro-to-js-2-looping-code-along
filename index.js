// Code your solutions in this file

const messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        const thankYou = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(thankYou);
    }
    return messages;
}

//console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

//const number = 10;


function countDown(number) {
    let i = 0;
    while (i <= number) {
        console.log(i++);
    }
    return number;
}
//console.log(countDown(number));

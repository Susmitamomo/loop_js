// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2: Prime Time
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            console.log(n);
            break;
        }
        n++;
    }
}

let n = 4; // Change this to test with different starting numbers
findNextPrime(n);

// Part 3: Feeling Loopy
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let currentCell = '';
let currentRow = [];

for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

    if (char === ',') {
        currentRow.push(currentCell);
        currentCell = '';
    } else if (char === '\n') {
        currentRow.push(currentCell);
        console.log(currentRow.join(', '));
        currentRow = [];
        currentCell = '';
    } else {
        currentCell += char;
    }
}

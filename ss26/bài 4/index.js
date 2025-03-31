function isPrime (num) {
    if (num < 2) {
        return false;
    } 
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
        return false;
    }
    return true;
}
function filterNumber (array) {
    if (!Array.isArray(array)) {
        console.log ("Invalid Array");
        return;
    }
    if (!array.every(item => typeof item === "number")) {
        console.log ("Invalid Array");
        return;
    }
    if (array.length === 0) {
        console.log ("Array empty");
        return;
    }
    let primeNumbers = array.filter(isPrime);
    if (primeNumbers.length === 0) {
        console.log("No element number in array");
    } else {
        console.log(primeNumbers);
    }
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [];
let array3 = ["abc"];

filterNumber(array1);
filterNumber(array2);
filterNumber(array3);
function displayNumber (array) {
    if (!array.every(item => typeof item === "number" && !isNaN(item))) {  
        console.log("Invalid Array");
        return;
    }
    if (array.length === 0) {
        console.log("Array is empty");
        return;
    } 
    let filterNumber = array.filter((item) => item > 10);
    console.log(filterNumber);
} 
let array1 = [1, 2, 8, 9, 12, 15];
let array2 = ["a", "b", "c", "d", "e", "f"];

displayNumber(array1)
displayNumber(array2)
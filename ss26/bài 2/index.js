function filterWord (array) {
    if (!Array.isArray(array)) {
        console.log("Invalid Array");
        return;
    }
    if (array.length === 0) {
        console.log("Array is empty");
        return;
    }
    let filterWord = array.filter((item) => item.length > 5);
    console.log(filterWord);
}
let array1 = ["apple", "banana", "cherry", "date", "elderberry"];
let array2 = [1, 2, 3, 4, 5, 6];

filterWord(array1);
filterWord(array2); 
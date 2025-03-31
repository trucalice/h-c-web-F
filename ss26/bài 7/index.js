let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    numbers.push(num);
}
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
let evenNumbers = squaredNumbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Mảng sau khi bình phương:", squaredNumbers);
console.log("Các số chẵn sau khi bình phương:", evenNumbers);

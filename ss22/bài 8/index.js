const arr = [1, 3, 2, 3, 4, 3, 5, 1, 2, 2];

// Sắp xếp mảng để các phần tử giống nhau nằm cạnh nhau
arr.sort((a, b) => a - b);

let mostFrequent = arr[0];
let maxCount = 1;
let currentCount = 1;

//Duyệt mảng nếu 2 phần tử liền kề giống nhau thì tăng currentcount lên 1 ko thì reset về 1
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        currentCount++;
    } else {
        currentCount = 1;
    }
    
    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostFrequent = arr[i];
    }
}

console.log(`Phần tử xuất hiện nhiều nhất là: ${mostFrequent} với ${maxCount} lần xuất hiện.`);

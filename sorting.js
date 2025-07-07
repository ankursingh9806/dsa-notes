// bubble sort

// time complexity: O(n^2)
// space complexity: O(1)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// selection sort

// time complexity: O(n^2)
// space complexity: O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// insertion sort

// time complexity: O(n^2)
// space complexity: O(1)

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr;
}
console.log(insertionSort([7, 3, 2, 5, 4, 6, 10, 9, 8, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

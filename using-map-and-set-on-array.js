// count frequency of elements in array using map

let arr = [1, 2, 2, 3, 4, 4, 5];
// option 1
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
// option 2
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
    } else {
        map.set(arr[i], 1);
    }
}

// add all elements of array to set

let arr = [1, 2, 2, 3, 4, 4, 5];
// option 1
let set = new Set(arr);
// option 2
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}

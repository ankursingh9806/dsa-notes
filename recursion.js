// print something n times

// time complexity: O(n)
// space complexity: O(n)

function print(n) {
    if (n === 0) { // base case
        return;
    }
    console.log('a');
    print(n - 1); // recursive call
}
print(5); // a a a a a

// print something n times in reverse order

// time complexity: O(n)
// space complexity: O(n)

function print(n) {
    if (n === 0) { // base case
        return;
    }
    print(n - 1); // recursive call
    console.log('a');
}
print(5); // a a a a a

// print 1 to n

// time complexity: O(n)
// space complexity: O(n)

function print(n, i = 1) {
    if (i > n) { // base case
        return;
    }
    console.log(i);
    print(n, i + 1); // move forward
}
print(5); // 1 2 3 4 5

// print n to 1

// time complexity: O(n)
// space complexity: O(n)

function print(n) {
    if (n === 0) { // base case
        return;
    }
    console.log(n);
    print(n - 1); // move backward
}
print(5); // 5 4 3 2 1

// sum of first n numbers

// time complexity: O(n)
// space complexity: O(n)

function sum(n) {
    if (n === 0) { // base case
        return 0;
    }
    return n + sum(n - 1); // recursive call
}
console.log(sum(5)); // 15

// factorial of n numbers

// time complexity: O(n)
// space complexity: O(n)

function factorial(n) {
    if (n === 0 || n === 1) { // base case
        return 1;
    }
    return n * factorial(n - 1); // recursive call
}
console.log(factorial(5)); // 120

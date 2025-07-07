// using a temporary variable
let temp = a;
a = b;
b = temp;

// using arithmetic operation
a = a + b;
b = a - b;
a = a - b;

// using destructuring
[a, b] = [b, a];

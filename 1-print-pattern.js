// pattern 1

//        i (row) j (column)
// *       1      1 to 1
// **      2      1 to 2
// ***     3      1 to 3
// ****    4      1 to 4
// *****   5      1 to 5

for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let j = 1; j <= i; j++) { // j is same as i
        star += '*';
    }
    console.log(star);
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
pattern(5);

// pattern 2

//       i (rows) j (column)
// *****   1       1 to 5
// ****    2       1 to 4
// ***     3       1 to 3
// **      4       1 to 2
// *       5       1 to 1

for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let j = 1; j <= 6 - i; j++) { // j dec by 1 as i inc: -1*i
        star += '*';
    }
    console.log(star);
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let star = '';
        for (let j = 1; j <= n + 1 - i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
pattern(5);

// pattern 3

//        i (rows) j (column) j (column)
// *****   1         1 to 5
// *       2                    1 to 1
// ****    3         1 to 4
// **      4                    1 to 2
// ***     5         1 to 3
// ***     6                    1 to 3
// **      7         1 to 2
// ****    8                    1 to 4
// *       9         1 to 1
// *****   10                   1 to 5

for (let i = 1; i <= 10; i++) {
    let stars = '';
    if (i % 2 !== 0) {
        for (let j = 1; j * 2 <= 11 - i; j++) { // j dec by 1 as i inc: -1*i
            stars += '*';
        }
    } else {
        for (let j = 1; j * 2 <= i; j++) { // j inc by 1 as i inc: 1*i
            stars += '*';
        }
    }
    console.log(stars);
}

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let stars = '';
        if (i % 2 !== 0) {
            for (let j = 1; j * 2 <= 11 - i; j++) {
                stars += '*';
            }
        } else {
            for (let j = 1; j * 2 <= i; j++) {
                stars += '*';
            }
        }
        console.log(stars);
    }
}
printPattern(10);

// pattern 4

//            i (rows) j (column) j (column) j (column)
// **********   1       1 to 5      1 to 0    1 to 5
// ****  ****   2       1 to 4      1 to 2    1 to 4
// ***    ***   3       1 to 3      1 to 4    1 to 3
// **      **   4       1 to 2      1 to 6    1 to 2
// *        *   5       1 to 1      1 to 8    1 to 1

for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= 6 - i; j++) { // j dec by 1 as i inc: -1*i
        stars += '*';
    }
    for (let j = 1; j <= 2 * i - 2; j++) { // j inc by 2 as i inc: 2*i
        stars += ' ';
    }
    for (let j = 1; j <= 6 - i; j++) { // j dec by 1 as i inc: -1*i
        stars += '*';
    }
    console.log(stars);
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let j = 1; j <= n + 1 - i; j++) {
            stars += '*';
        }
        for (let j = 1; j <= 2 * i - 2; j++) {
            stars += ' ';
        }
        for (let j = 1; j <= n + 1 - i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
pattern(5);

// pattern 5

//            i (rows) j (column) j (column) j (column)
// *        *   1       1 to 1      1 to 4    1 to 1
// **      **   2       1 to 2      1 to 3    1 to 2
// ***    ***   3       1 to 3      1 to 2    1 to 3
// ****  ****   4       1 to 4      1 to 1    1 to 4
// **********   5       1 to 5      1 to 0    1 to 5

for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) { // j is same as i
        stars += '*';
    }
    for (let j = 1; j <= 10 - 2 * i; j++) { // j dec by 1 as i inc: -1*i
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) { // j is same as i
        stars += '*';
    }
    console.log(stars);
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        for (let j = 1; j <= 2 * (n - i); j++) {
            stars += ' ';
        }
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
pattern(5);

// pattern 6

//            i (rows) j (column) j (column) j (column)
// *    *       1       1 to 1      1 to 4    1 to 1
// **   **      2       1 to 2      1 to 3    1 to 2
// ***  ***     3       1 to 3      1 to 2    1 to 3
// **** ****    4       1 to 4      1 to 1    1 to 4
// **********   5       1 to 5      1 to 0    1 to 5

for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) { // j is same as i
        stars += '*';
    }
    for (let j = 1; j <= 5 - i; j++) { // j dec by 1 as i inc: -1*i
        stars += ' ';
    }
    for (let j = 1; j <= i; j++) { // j is same as i
        stars += '*';
    }
    console.log(stars);
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        for (let j = 1; j <= n - i; j++) {
            stars += ' ';
        }
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
pattern(5);

// pattern 7

//       i (row) j (column)
// 1       1      1 to 1
// 12      2      1 to 2
// 123     3      1 to 3
// 1234    4      1 to 4
// 12345   4      1 to 5

for (let i = 1; i <= 5; i++) {
    let num = '';
    for (let j = 1; j <= i; j++) {
        num += j;
    }
    console.log(num)
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {
            num += j;
        }
        console.log(num);
    }
}
pattern(5);

// pattern 8

//       i (row) j (column)
// 1       1      1 to 1
// 22      2      1 to 2
// 333     3      1 to 3
// 4444    4      1 to 4
// 55555   5      1 to 5

for (let i = 1; i <= 5; i++) {
    let num = '';
    for (let j = 1; j <= i; j++) {
        num += i;
    }
    console.log(num)
}

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let num = '';
        for (let j = 1; j <= i; j++) {
            num += i;
        }
        console.log(num);
    }
}
pattern(5);

// time complexity: O(n^2)
// space complexity: O(n)

function subarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        let subarr = [];
        for (let j = i; j < arr.length; j++) {
            subarr.push(arr[j]);
            console.log(subarr);
        }
    }
}
subarrays([1, 2, 3, 4, 5]);

/*
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
[ 4 ]
[ 4, 5 ]
[ 5 ]
*/

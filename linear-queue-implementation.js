// time complexity: O(1) for all operations
// space complexity: O(1) for all operations

class Queue {
    constructor() {
        this.q = [];
    }
    // enqueue element to end
    enqueue(element) {
        this.q.push(element);
    }
    // dequeue front element and return it
    dequeue() {
        if (this.q.length === 0) {
            return 'q is empty';
        } else {
            return this.q.shift();
        }
    }
    // return front element
    front() {
        if (this.q.length === 0) {
            return 'q is empty';
        } else {
            return this.q[0];
        }
    }
    // returns true if empty otherwise false
    isEmpty() {
        return this.q.length === 0;
    }
    // return number of elements
    size() {
        return this.q.length;
    }
    // clear all elements
    clear() {
        this.q = [];
        return 'q cleared';
    }
};
const obj = new Queue();
obj.enqueue(5);
obj.enqueue(13);
obj.enqueue(8);
console.log(obj.dequeue()); // 5
console.log(obj.front()); // 13
console.log(obj.isEmpty()); // false
console.log(obj.size()); // 2
console.log(obj.clear()); // q cleared

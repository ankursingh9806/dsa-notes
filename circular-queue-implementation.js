// time complexity: O(1) for all operations
// space complexity: O(1) for all operations

class CircularQueue {
    constructor(k) {
        this.q = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.size = k;
    }
    // enqueue element to end and returns true when succeeds
    enqueue(element) {
        if (this.isFull()) {
            return false;
        }
        if (this.isEmpty()) {
            this.head = 0;
        }
        this.tail = (this.tail + 1) % this.size;
        this.q[this.tail] = element;
        return true;
    }
    // dequeue front element and returns true when succeeds
    dequeue() {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }
    // return front element
    front() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.q[this.head];
        }
    }
    // return last element
    rear() {
        if (this.isEmpty()) {
            return -1;
        } else {
            return this.q[this.tail];
        }
    }
    // returns true if empty otherwise false
    isEmpty() {
        return this.head === -1;
    }
    // returns true if full otherwise false
    isFull() {
        return (this.tail + 1) % this.size === this.head;
    }
}
// usage
const obj = new CircularQueue(3);
console.log(obj.enqueue(1)); // true
console.log(obj.enqueue(2)); // true
console.log(obj.enqueue(3)); // true
console.log(obj.enqueue(4)); // false
console.log(obj.rear()); // 3
console.log(obj.isFull()); // true
console.log(obj.dequeue()); // true
console.log(obj.enqueue(4)); // true
console.log(obj.rear()); // 4

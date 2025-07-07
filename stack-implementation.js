// time complexity: O(1) for all operations
// space complexity: O(1) for all operations

class Stack {
    constructor() {
        this.st = [];
    }
    // push element on top
    push(element) {
        this.st.push(element);
    }
    // pop top element and return it
    pop() {
        if (this.st.length === 0) {
            return 'st is empty';
        } else {
            return this.st.pop();
        }
    }
    // return top element
    peek() {
        if (this.st.length === 0) {
            return 'st is empty';
        } else {
            return this.st[this.st.length - 1];
        }
    }
    // return true if empty otherwise false
    isEmpty() {
        return this.st.length === 0;
    }
    // return number of elements
    size() {
        return this.st.length;
    }
    // clear all elements
    clear() {
        this.st = [];
        return 'st cleared';
    }
}
// usage
const obj = new Stack();
obj.push(5);
obj.push(13);
obj.push(8);
console.log(obj.pop()); // 8
console.log(obj.peek()); // 13
console.log(obj.isEmpty()); // false
console.log(obj.size()); // 2
console.log(obj.clear()); // st cleared

// node class
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// singly linked list class
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // get value of a node at specified index
    // time complexity: O(n), space complexity: O(1)
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }
    // insert a node at head
    // time complexity: O(1), space complexity: O(1)
    addAtHead(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    // insert a node at tail
    // time complexity: O(1), space complexity: O(1)
    addAtTail(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    // insert a node at specified index
    // time complexity: O(n), space complexity: O(1)
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.length) {
            this.addAtTail(val);
            return;
        }
        let newNode = new ListNode(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
    }
    // delete first node (head)
    // time complexity: O(1), space complexity: O(1)
    deleteAtHead() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
    }
    // delete last node (tail)
    // time complexity: O(n), space complexity: O(1)
    deleteAtTail() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.length--;
    }
    // delete a node at specific index
    // time complexity: O(n), space complexity: O(1)
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.deleteAtHead();
            return;
        }
        if (index === this.length - 1) {
            this.deleteAtTail();
            return;
        }
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
        this.length--;
    }
    // print linked list
    // time complexity: O(n), space complexity: O(n)
    print() {
        let curr = this.head;
        let res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res.join(' -> '));
    }
}
// usage
const obj = new SinglyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
obj.print(); // 1 -> 2 -> 3
console.log(obj.get(1)); // 2
obj.deleteAtIndex(1);
obj.print(); // 1 -> 3
console.log(obj.get(1)); // 3
obj.deleteAtHead();
obj.deleteAtTail();
console.log(obj.get(0)); // null

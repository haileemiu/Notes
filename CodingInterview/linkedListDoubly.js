class LinkedList {
    constructor(value) {
        this.head = {
            previous: null,
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            previous: null,
            value: value,
            next: null
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            previous: null,
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }

        const newNode = {
            previous:null,
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;
        this.length++;
        return this.printList();
    }


    // ?? traverse from back or front
    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        
        leader.next = unwantedNode.next;
        unwantedNode.previous = leader;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16); 
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
myLinkedList.remove(2);

// console.log(JSON.stringify(myLinkedList, null, 3))
console.log(myLinkedList.printList())
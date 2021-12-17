class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // get first value in line
    peek(){
        return this.first;
    }

    // add to the end of the line (aka last)
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // remove from the front of line (aka first)
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.length === 1) { 
            this.last = null; 
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    //isEmpty
}

const myQueue = new Queue()

// myQueue.enqueue('hailee')
// myQueue.enqueue('nikko')
// myQueue.enqueue('mark')
myQueue.dequeue();

console.log(myQueue)
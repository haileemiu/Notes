/* Linked List (singly) */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // See the very top element/node
    peek() {
       return this.top;
    }

    // Add a node to the to of the stack
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    // Remove from the top of the stack
    pop(){
        if (!this.top){
            return null;
        }

        if (this.top === this.bottom){ // or this.length = 1
            this.bottom = null;
        }
        /* If you need to keep reference to the original top (aka the item popped) */
        // const holdingPointer = this.top; // this is needed bc in a JS (garbage collected language) if there is no reference to something, then it is automatically removed from memory;
        // this.top = this.top.next;

        // this.length--;
        // return holdingPointer;
        
        /* If you don't need to keep reference to the popped item */
        this.top = this.top.next;
        this.length--;
        return this;
    }

    // Check that stack is empty
    //isEmpty
}

const myStack = new Stack();

console.log('START:\n', myStack.peek())

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log('POP:\n', myStack.pop());

console.log('RESULT:\n', myStack);

console.log('END:\n', myStack.peek())

//////////////////////////////////////////////////////////////////////

/* Array */
// Note: arrays already have push and pop

class ArrayStack {
    constructor(){
        this.array = [];
    }

    // See the very top element/node
    peek() {
       return this.array[this.array.length - 1];
    }

    // Add a node to the to of the stack
    push(value) {
        return this.array.push(value);
    }

    // Remove from the top of the stack
    pop(){
        this.array.pop();
        return this;
    }

    // Check that stack is empty
    //isEmpty
}

const myStack = new ArrayStack();

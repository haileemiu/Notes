class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  /* 
  Popular interview question.
  Hardest in this course.
  */

  // reverse(){
  //   // if (this.length === 1)
  //   if(!this.head.next) {
  //     return this.head;
  //   }

  //   let first = this.head;
  //   this.tail = this.head;
  //   let second = first.next;

  //   while(second) {
  //     let temp = second.next;
  //     second.next = first;
  //     first = second;
  //     second = temp;
  //   }

  //   this.head.next = null;
  //   this.head = first;
  //   // return this.printList();
  //   return this;
  // }

  
  // reverseLinkedList(head) { // head = entire list
  //   let prev = null; // need to take the next property of first node and point to null (aka make it the tail)
  //   let next = null; 

  //   while(head !== null){ // move along to each successive node & reassign that node's next property TO the previous node
  //     // `head === null` --> last value in the chain thru the process, we are going to keep 
  //   }
  // }

  /* 
  https://www.youtube.com/watch?v=hMnwCgnfND4
  https://www.youtube.com/watch?v=UCv-EmtvPe4
  */

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
myLinkedList.reverse();

console.log(myLinkedList);

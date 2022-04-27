/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// ---- Generate our linked list ----

const printList = (head) => {
	if (!head) {
		return;
	}

	console.log(head.val);
	printList(head.next);
}

/* General Traversal */

let traversal = function (head) {
	let currentNode = head;
	while (currentNode) {
		// Perform Operation
		currentNode = currentNode.next;
	}
}


// --------- Solution -----------

var reverseList = function (head) {
	let listSoFar = null;
	// 1 - Get current node.
	let currentNode = head;

	while (currentNode) {
		// 2 - Store the next value. 
		// ^ Saving to reference in 5 so that you can continue the traversal. 
		// [Only the 1 node]
		let storedNext = currentNode.next;

		// 3 - Update the next value to the previous (aka list so far)
		// ^Actively changing the currentNode node's next to the previous (aka list so far). Don't forget with LL you will have the entire list scene. 
		// [Changing next node & adding list nodes]
		currentNode.next = listSoFar;

		// 4 - Store the currentNode node as previous (aka list so far)
		// ^ Saving the work. Literally copy the new currentNode value
		// [Copying the list created above.]
		listSoFar = currentNode;

		// 5 - Update currentNode node to the stored value.
		// ^ Continuing the traversal, by preparing for the next round.
		// [Only the 1 node]
		current = storedNext;
	}

	return listSoFar;
};

printList(linkedList);
console.log('after reverse')
printList(reverseList(linkedList))
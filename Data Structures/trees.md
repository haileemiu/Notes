# Trees

- hierarchical structure 
    - in contrast to linked lists and arrays (linear)
    - trees can have 0 or more child nodes

![Trees](/Users/haileemiu/Developer/Notes/Images/Tree.png)

- there are MANY different types of trees

Examples:
- DOM is a tree data structure
    - dev tools > inspect > elements
- online chess player used a tree to make a decision
- Facebook comments
- Family tree
- > Abstract syntax tree
- linked list are technically a type of tree but will 1 linear path. **But with a tree, a node can only point to a child.**

## Binary Tree

- each node can have 0,1, or 2 nodes (no more)
- each child can only have 1 parent

```js
function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
```
**Perfect Binary Tree**
- All the leaf nodes are full/filled in (no node with only 1 child); either 0 or 2 children
- really efficient and desireable

Properties:
- number of total nodes double on each level as move down the tree
- number of nodes on the last level is equal to the number of the sum of nodes on all the other levels plus 1 = about half of our nodes are on the last level

**Full Binary Tree**
- a node has either 0 or 2 children
    - but never 1 child < ??

**Binary Search Tree**

- lookup, insert, delete `O(log N)`
- calculate nodes per level
```
level 0: 2^0 = 1
level 1: 2^1 = 2
level 2: 2^2 = 4
level 3: 2^3 = 8

number of nodes = 2^h - 1
h = height/level
log nodes = height/steps
log 100 = 2
10^2 = 100
```

Example:
- look through phone book - divide and conquer
- google search

- Big O notation - Good, better than `O(n)`
    - because you don't need to check every element
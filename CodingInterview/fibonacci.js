function findFibonacciRecursive(n){
    if(n < 2){
        return n;
    }
    return findFibonacciRecursive(n-1) + findFibonacciRecursive(n-2)
} // O(n!)

console.log(findFibonacciRecursive(8))

function findFibonacciIterative(n){
    let array = [0,1];
    for(let i = 2; i < n+1; i++){
        array.push(array[i-2]+arrary[i-1]);
    }

    return array[n];
} // O(n)
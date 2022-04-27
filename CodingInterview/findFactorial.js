function findFactorialIterative(number){
    let answer = 1;
    
    if(number === 2){
        answer = 2;
    }

    for(let i = 2; i <= number; i++){
        answer = answer * i;
    }

    return answer;
} 
// O(n)

// console.log(findFactorialIterative(4))

function findFactorialRecursive(number){ //4 

    // A base case
    if(number < 2){
        console.log('base case')
        return 1;
    }
    // Recursive case
    return number * findFactorialRecursive(number-1); // get closer and closer to the base case
    
    // console.log('number:', number);
    // let x = findFactorialRecursive(number-1)
    // console.log('x:', x)
    // return number * x; 
}
//O(n)
console.log(findFactorialRecursive(4))
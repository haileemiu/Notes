// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false


/* 
Brute Force Way
Time: O(a*b)
Space: O(1)
*/
function containsCommonItem(arr1, arr2) {

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++) {
            console.log('i:', i)
            console.log('i value:', arr1[i])
            console.log('j:', j)
            console.log('j value:', arr2[j])
            if (arr1[i] === arr2[j]){
                console.log(true)
                return true;
            }
            console.log('no match')
        }
        console.log('false')
        return false;
    } 
}   

const arr1 
= ['a','a','b','c','x']
// = ['a','b','c','d','e'];
const arr2 
= ['z','b','y']
// = ['a','y','x','w','y'];

// containsCommonItem(arr1, arr2);


/*
Common way to improve time complexity 
Time: O(a+b)
Space: O(a)
*/

function containsCommonItem2(arr1, arr2) {
    let map = {}
    for(let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            map[arr1[i]] = true
            console.log(true)
        } else {
            console.log(false)
        }
    }
    console.log(map)

    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]) {
            console.log('true match')
            return true;
        }
    }
    console.log('false match')
    return false;
}

// containsCommonItem2(arr1, arr2)

/* Javascript specific */

function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
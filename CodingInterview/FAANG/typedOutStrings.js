const doTypeOutStringsMatch = (S,T) => {
    let finalS = []
    let finalT = []

    for(let s = 0; s < S.length; s++){
        if(S[s] === "#"){
            finalS.pop()
        } else {
            finalS.push(S[s])
        }
    }

    for(let t = 0; t < T.length; t++){
        if(T[t] === "#"){
            finalT.pop()
        } else {
            finalT.push(T[t])
        }
    }

    if(finalS.length !== finalT.length){
        return false
    }

    for(let i = 0; i < finalS.length; i++){
        if(finalS[i] !== finalT[i]){
            return false
        }
    }
    return true
}

const string1 = "Ab#z"
const string2 = "ab#z"
console.log(doTypeOutStringsMatch(string1, string2));


// const string1 = "ab#z"
// const string2 = "az#z"

// const buildString = function(string) {
//     const builtString = [];
//     for(let p = 0; p < string.length; p++) {
//         if(string[p] !== '#') {
//             builtString.push(string[p]);
//         } else {
//             builtString.pop();
//         }
//     }
    
//     return builtString;
// }

// var backspaceCompare = function(S, T) {
//     const finalS = buildString(S);
//     const finalT = buildString(T);
    
//     if(finalS.length !== finalT.length) {
//         return false
//     } else {
//         for(let p = 0; p < finalS.length; p++) {
//             if(finalS[p] !== finalT[p]) {
//                 return false
//             }
//         }
//     }
    
//     return true;
// };

// console.log(backspaceCompare(string1, string2));

// ///

// const string1 = "ab#z"
// const string2 = "az#z"

// var backspaceCompare = function(S, T) {
//     let p1 = S.length - 1, p2 = T.length - 1;
    
//     while(p1 >= 0 || p2 >= 0) {
//         if(S[p1] === "#" || T[p2] === "#") {
//             if(S[p1] === "#") {
//                 let backCount = 2;
                
//                 while(backCount > 0) {
//                     p1--;
//                     backCount--;
                    
//                     if(S[p1] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }
            
//             if(T[p2] === "#") {
//                 let backCount = 2;
                
//                 while(backCount > 0) {
//                     p2--;
//                     backCount--;
                    
//                     if(T[p2] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }
//         } else {
//             if(S[p1] !== T[p2]) {
//                 return false;
//             } else {
//                 p1--;
//                 p2--;
//             }
//         }
//     }
    
//     return true;
// };

// console.log(backspaceCompare(string1, string2));

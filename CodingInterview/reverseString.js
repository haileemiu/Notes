
// My initial way
function reverseString(input) {
    let output = [];
    let totalCharacters = input.length - 1
    if(!input || input.length < 2 || typeof input != 'string') {
        return 'nope';
    }
    for (let i = 0; i < input.length; i++) {
        console.log(i)
        output[totalCharacters - i] = input[i]    
    }
    output = output.toString()
    console.log(output);

    return output;

}

let input 
    = "Hi There!"

reverseString(input);

// // Video way
// function reverse(str){
//     if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
//     const backwards = [];
//     const totalItems = str.length - 1;
//     for(let i = totalItems; i >= 0; i--){
//       backwards.push(str[i]);
//     }
//     return backwards.join('');
//   }
  
//   function reverse2(str){
//     //check for valid input
//     return str.split('').reverse().join('');
//   }
  
//   const reverse3 = str => [...str].reverse().join('');
  
//   reverse('Timbits Hi')
//   reverse('Timbits Hi')
//   reverse3('Timbits Hi')
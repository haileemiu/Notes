// function insertionSort(array) {
//     const length = array.length;

//     for (let i = 0; i < length; i++) {
//         if (array[i] < array[0]) {
//             //move number to the first position
//             array.unshift(array.splice(i, 1)[0]);
//         } else {
//             // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//             if (array[i] < array[i - 1]) {
//                 //find where number should go
//                 for (let j = 1; j < i; j++) {
//                     if (array[i] >= array[j - 1] && array[i] < array[j]) {
//                         //move number to the right spot
//                         array.splice(j, 0, array.splice(i, 1)[0]);
//                     }
//                 }
//             }
//         }
//     }
// }

const numbers = [6, 5, 3, 8, 7, 2, 4];

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {

//         let current = array[i];
//         let j = i - 1;

//         while (j >= 0 && array[j] > current) {
//             array[j + 1] = array[j];
//             j--;
//         }
//         array[j + 1] = current;
//     }
// }



const insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let j = i + 1;
        while (array[j] < array[j - 1]) {
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
};


insertionSort(numbers);
console.log(numbers);


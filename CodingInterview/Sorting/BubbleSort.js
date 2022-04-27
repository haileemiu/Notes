// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [99,44,6,2]

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++){
        console.log('i:', i, 'value =', array[i])
        let isSorted = true;
        for(let j = 1; j < array.length - i; j++){
            console.log('j value =', array[j], 'compare to j-1 value =', array[j-1])

            if(array[j] < array[j - 1]){
                swap(array, j, j - 1)
                console.log('swapped')
                console.log(array)
                isSorted = false;
            }
            if(isSorted){
                return;
            }
        }
    }
    return array;
}

const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

bubbleSort(numbers);
console.log(numbers);
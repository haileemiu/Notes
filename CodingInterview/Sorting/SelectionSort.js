const numbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i;
        
        // `j = i + 1` bc there is no need to loop over the already sorted subarray
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                // update minimum if current is lower than what we had previously
                min = j;
            }
        }

        // swap
        if(min != i){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(
    selectionSort(numbers)
)
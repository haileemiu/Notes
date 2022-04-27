const array = [1, 3, 7, 9, 2];
const target = 11;

/* Brute Force */ // time: O(n^2), space: O(1)
const findTwoSum = function(numbersArray, target) {
  for(let i = 0; i < numbersArray.length; i++) {
    
    const numberToFind = target - numbersArray[i];

    // Note: j = i + 1 (rather than j=1) 
    // bc needs to be relative to the first pointer (i)
    for(let j = i + 1; j < numbersArray.length; j++) { 
      if(numberToFind === numbersArray[j]) {
        return [i, j];
      }
    }
  }

  return null;
};

/* Optimal */
const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}


console.log(findTwoSum(array, target));
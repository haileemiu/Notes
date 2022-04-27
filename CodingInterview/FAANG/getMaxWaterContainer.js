const heightsArray = [3, 14, 2, 9, 6, 4,12,9,1,5];

// const getMaxWaterContainer = function(heights) {
//   let maxArea = 0;

//   for(let p1 = 0; p1 < heights.length; p1++) {
//     for(let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   };

//   return maxArea;
// }

/* Optimal Solution */
const getMaxWaterContainer = function (heights) {
    let p1 = 0, p2 = heights.length - 1, maxArea = 0;

    while(p1 < p2) {
    // while (p2 > p1) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));
let array = [6, 5, 3, 8, 7, 2, 4];

array.unshift(array.splice(1, 1)[0]);

console.log(array)
"use strict";
// Problem 1
const sumArray = (nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
};
const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr));

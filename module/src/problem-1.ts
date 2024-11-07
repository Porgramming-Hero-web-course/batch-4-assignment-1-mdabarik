// Problem 1

const sumArray = (nums : number[]): number => {
    let sum : number = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

const arr : number[] = [1, 2, 3, 4, 5];
console.log(sumArray(arr));

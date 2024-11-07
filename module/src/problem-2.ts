{
    // problem-2

    const removeDuplicates = (nums: number[]): number[] => {
        const uniqueNums : number[] = [];
        for (let num of nums) {
            if (!uniqueNums.includes(num)) {
                uniqueNums.push(num);
            }
        }
        return uniqueNums;
    }
    
    const arr : number[] = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5];
    removeDuplicates(arr);

    //
}


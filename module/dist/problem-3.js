"use strict";
{
    // start of block scope
    const countWordOccurrences = (str, key) => {
        /*
        1. convert str and key to lowercase.
        2. remove special character from str and key using regular expression.
        3. convert cleaned str into word space separated.
        */
        const lowerCaseStr = str.toLowerCase();
        const lowerCaseKey = key.toLowerCase().replace(/[^a-z0-9\s]/g, '');
        const words = lowerCaseStr.replace(/[^a-z0-9\s]/g, '').split(" ");
        let countFreqOfKey = 0;
        for (let i = 0; i < words.length; i++) {
            if (lowerCaseKey == words[i]) {
                countFreqOfKey++;
            }
        }
        return countFreqOfKey;
    };
    const str = "TypeScript is great. I love TypeScript!";
    const key = "typescript";
    const res = countWordOccurrences(str, key);
    console.log(res);
    // end of block scope
}

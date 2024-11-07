
{
    // start of block scope
    const countWordOccurrences = (str : string, key: string) : number => {
        /*
        1. convert str and key to lowercase.
        2. remove special character from str and key using regular expression.
        3. convert cleaned str into word space separated.
        */
        const lowerCaseStr: string = str.toLowerCase();
        const lowerCaseKey: string = key.toLowerCase().replace(/[^a-z0-9\s]/g, '');
        const words: string[] = lowerCaseStr.replace(/[^a-z0-9\s]/g, '').split(" ");
            
        let countFreqOfKey : number = 0;
        for (let i = 0; i < words.length; i++) {
            if (lowerCaseKey == words[i]) {
                countFreqOfKey++;
            }
        }
        return countFreqOfKey;
    }
    
    const str: string = "TypeScript is great. I love TypeScript!";
    const key: string = "typescript";
    const res: number = countWordOccurrences(str, key);
    console.log(res);

    // end of block scope
}


{
    // start of block scope
    const countWordOccurrences = (str : string, key: string) : number => {
        const lowerCaseStr: string = str.toLowerCase();
        const lowerCaseKey: string = key.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
        const words: string[] = lowerCaseStr.replace(/[^a-zA-Z0-9\s]/g, '').split(" ");
    
        console.log(words[0]);
        
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

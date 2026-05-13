function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        console.log(`Checking character '${char}' at index ${i}`);

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}

// Example usage:
const input = [" "]; 
const result = longestCommonPrefix(input);
console.log(`Longest common prefix: '${result}'`); // Output: ' ' but should be ' '
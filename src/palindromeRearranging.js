function solution(inputString) {
    const charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        if (charCount[inputString[i]]) {
            charCount[inputString[i]]++;
        } else {
            charCount[inputString[i]] = 1;
        }
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test palindromeRearranging

// alternative solution
// function solution(inputString) {
//     return (
//         inputString
//             .split('')
//             .sort()
//             .join('')
//             .replace(/(\w)\1/g, '').length < 2
//     );
// }

// alternative solution
// function solution(s) {
//     let ss = s.split('').sort(),
//         r = 0;
//     while (ss.length) {
//         let t = ss.shift();
//         if (t === ss[0]) ss.shift();
//         else r++;
//     }
//     return r < 2;
// }

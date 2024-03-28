// Q1. Amazing Subarrays
// You are given a string S, and you have to find all the amazing substrings of S.
// An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).
// Input
// Only argument given is string S.
// Output
// Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.

// Example

// Input
//     ABEC

// Output
//     6


function findAmazingSubArrays(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let substrings = [];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            // Count substrings starting from this vowel
            count += str.length - i;
            // Add substrings to array
            for (let j = i; j < str.length; j++) {
                substrings.push(str.substring(i, j + 1));
            }
        }
    }

    return { 
        count: count % 10003,
        substrings: substrings 
    };        

}

let str = "ABEC";
let output = findAmazingSubArrays(str);
console.log("Amazing-substrings:", output.substrings); 
console.log("Count:", output.count); 
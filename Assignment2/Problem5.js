// Declare an array and sum of all values in an array using loops - for, while  — Use functions
const myArray = [1, 2, 3, 4, 5];

// Function to calculate the sum of all values in the array using a for loop
function sumArrayUsingForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to calculate the sum of all values in the array using a while loop
function sumArrayUsingWhileLoop(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

// Call the functions to calculate the sum of the array
console.log("Sum of array using for loop:", sumArrayUsingForLoop(myArray));
console.log("Sum of array using while loop:", sumArrayUsingWhileLoop(myArray));

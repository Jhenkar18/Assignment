//Declare an array and print all values in an array using loops - for, while — Use functions
const myArray = [1, 2, 3, 4, 5];

// Function to print all values in the array using a for loop
function printArrayUsingForLoop(arr) {
    console.log("Printing array using for loop:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to print all values in the array using a while loop
function printArrayUsingWhileLoop(arr) {
    console.log("Printing array using while loop:");
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

// Call the functions to print the array
printArrayUsingForLoop(myArray);
printArrayUsingWhileLoop(myArray);

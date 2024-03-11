//1. Generate * pattern to construct a pyramid
function generatePyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let str = '';

        // Add spaces before asterisks
        for (let j = 0; j < rows - i - 1; j++) {
            str += ' ';
        }

        // Add asterisks
        for (let k = 0; k <= i * 2; k++) {
            str += '*';
        }

        console.log(str);
    }
}

// Example usage
const numberOfRows = 5;
generatePyramid(numberOfRows);

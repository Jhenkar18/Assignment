//Implement string reversal. dont use builtin function
function reverseString(str) { 
	let strRev = ""; 
	for (let i = str.length - 1; i >= 0; i--) { 
		strRev += str[i]; 
	} 
	console.log(strRev); 
} 

reverseString("JavaScript"); 


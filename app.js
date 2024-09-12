let integerNumber = parseInt('123');
console.log(integerNumber); 


let floatingPointNumber = parseFloat('3.14');
console.log(floatingPointNumber); 


let hexNumber = parseInt('0x1A');
console.log(hexNumber); 


let binaryNumber = parseInt('1010', 2);
console.log(binaryNumber); 


let maxValue = Number.MAX_VALUE;
console.log(maxValue); 


let isInteger = Number.isInteger(4.5);
console.log(isInteger); 


let isSafeInteger = Number.isSafeInteger(Math.pow(2, 53));
console.log(isSafeInteger); 


let trimmedIntegerNumber = parseInt(' 345 ');
console.log(trimmedIntegerNumber); 


let invalidParse = parseInt('abc123');
console.log(invalidParse); 


let octalNumber = parseInt('123', 8);
console.log(octalNumber);  


let minValue = Number.MIN_VALUE;
console.log(minValue);  


let parsedIntegerFromFloat = parseInt('56.78');
console.log(parsedIntegerFromFloat); 


let roundedNumber = Math.round(7.5);
console.log(roundedNumber); 


let isNotANumber = isNaN('abc');
console.log(isNotANumber);  


let numberFromString = parseInt('0123');
console.log(numberFromString);  


let maxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(maxSafeInteger);  


let formattedNumber = (3.4567).toFixed(2);
console.log(formattedNumber); 


let minSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInteger); 


let flooredNumber = Math.floor(78.99);
console.log(flooredNumber); 


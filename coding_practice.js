                /** Coding/Technical Interview  Questions & Answers */

/** 1. How to find duplicate elements in a given Array?  */

// const arrNumber = [1, 2, 4, 2, 5, 4, 5]
// const duplicate = arrNumber.filter((elem, index, arr)=>arr.indexOf(elem)!== index)
// console.log(duplicate)
/** 
 * How it works
For 1 (index 0), arr.indexOf(1) is 0, so 0 === 0, not included.
For 2 (index 1), arr.indexOf(2) is 1, so 1 === 1, not included.
For 4 (index 2), arr.indexOf(4) is 2, so 2 === 2, not included.
For 2 (index 3), arr.indexOf(2) is 1, so 1 !== 3, included.
For 5 (index 4), arr.indexOf(5) is 4, so 4 === 4, not included.
For 4 (index 5), arr.indexOf(4) is 2, so 2 !== 5, included.
*/


////////////////////////////////////////////////////////////////////////////////////////////


/** 2. How to find Max and Min value in a given Array?  */

// const myArr = [1, 67, 34, 54, 2];
// const maxNumber = (arr) => {
//   return arr.reduce((pre, cur) => (pre > cur ? pre : cur));
// };
// console.log(maxNumber(myArr));

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.


////////////////////////////////////////////////////////////////////////////////////////////


/** 3. What is the difference between '==' and '==='?  */

// == compares the data values
// === compare the data values and types

// let x = 2;
// let y = "2"
// console.log(x == y) // true
// console.log(x === y) // false


////////////////////////////////////////////////////////////////////////////////////////////


/** 4. How to find second largest value, and remove first largest value in Array? */

// const myArr = [1, 67, 34, 54, 2];

// const secondLargestValue = (arr)=>{
//    const firstLargestValue = Math.max(...arr);
//     const index = arr.indexOf(firstLargestValue)
//     arr.splice(index, 1)
//     const secLarVal = Math.max(...arr)
//     return secLarVal
// }

// console.log(secondLargestValue(myArr))


////////////////////////////////////////////////////////////////////////////////////////////


/** 5. What is difference between Filter() and Find() method?  */

// filter():- method matches all the elements in the array and return a new array
// find():- find method returns only first matched element

// const objArr = [
//     { name: "samar", score: 1},
//     { name: "rafat", score: 2},
//     { name: "afreen", score: 3},
//     { name: "asif", score: 4},
//     { name: "zareen", score: 5},
// ]

// const myData1 = (arr)=>{
//     return filter = arr.filter(item => item.score < 3)
// }

// const myData2 = (arr)=>{
//     return arr.find(item => item.score < 3)
// }

// console.log(myData2(objArr))


////////////////////////////////////////////////////////////////////////////////////////////


/** 6. How to find the missing number in a given integer Array of 1 to 10? */

// const numArr = [1, 2, 3, 4, 5, 6, 9, 10]
// const missArr = [];

// const missingValue = (arr)=>{
//     const maxVal = Math.max(...arr)
//     const minVal = Math.min(...arr)
//     for(let i=minVal; i<maxVal; i++){
//         console.log(arr.indexOf(i))
//         if(arr.indexOf(i)<0){
//             missArr.push(i)
//         }
//     }
//     return missArr 
// }

// console.log(missingValue(numArr))


// example to know how to loop works

// for (i=1; i<10; i++){
//     console.log(i)
// }


////////////////////////////////////////////////////////////////////////////////////////////


/** 7. How to find even or odd number in a given array? */

const arrNumbers = [ 1, 2, 53, 84, 5, 16, 7, 38, 19, 10]

// const evenVals = (arr)=>{
//     return arr.filter(item => item%2===0)
// }

// const oddVals = (arr)=>{
//     return arr.filter(item => item%2!==0)
// }

// console.log(evenVals(arrNumbers))
// console.log(oddVals(arrNumbers))


////////////////////////////////////////////////////////////////////////////////////////////


/** 8. How to find the sum of all elements in a given array?  */

// const numArr = [1, 2, 3, 4]

// const sumOfArr = (arr)=>{
//     return arr.reduce((pre, cur)=>{
//        return pre + cur
//     })
// }

// console.log(sumOfArr(numArr))

// let initVal = 0;

// const sumFunction = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         initVal += arr[i]
//     }
//     return initVal
// }

// console.log(sumFunction(numArr))


////////////////////////////////////////////////////////////////////////////////////////////


/** 9. How to find Factorial(n!) of a given number?  */

// const numArr = [ 5, 3, 6, 2 ]

// let fact = 1
// const factFunc = (arr)=>{
//     for( let i = 0; i < arr.length; i++){
//         fact *= arr[i]
//     }
//     return fact
// }

// console.log(factFunc(numArr))


////////////////////////////////////////////////////////////////////////////////////////////


/** 10. How to Find Prime number? */

// let newNumber = 3;

// if (newNumber === 1) {
//   console.log(`${newNumber} is not prime neither composite`);
// } else if (newNumber < 1) {
//   console.log(`Prime number of ${newNumber} is not possible`);
// } else {
//   for (let i = 2; i < newNumber; i++) {
//     if (newNumber % i === 0) {
//       var result = `${newNumber} is not prime number`;
//       break;
//     } else {
//       var result = `${newNumber} is prime number`;
//     }
//   }
//   console.log(result)
// }

// const newNum = 4;

// if (newNum === 1) {
//     console.log(`${newNum} is neither prime number nor composite number`)
// } else if(newNum < 1){
//     console.log(`Prime number is not possible for ${newNum}`)
// }else{
//     let isPrime = true
//     for(let i = 2; i < newNum; i++){
//         if(newNum % i === 0){
//             isPrime = false
//         }
//     }
//     if (isPrime) {
//         console.log(`${newNum} is a prime number`)
//     } else {
//         console.log(`${newNum} is not a prime number`)
//     }

// }


////////////////////////////////////////////////////////////////////////////////////////////


/** 11. How to find vowels from string and find number of vowels? */

//step: 1
// let val = "f";
// val = val.toLocaleLowerCase()

//     if( val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
//         console.log("this is a vowel")
//     }else{
//         console.log("this is consonent")
//     }

//step: 2

// var string = "rafat";
// const vowels = ['a', 'e', 'i', 'o', 'u']
// const countVowel = (str) => {
//     var count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowel(string))


////////////////////////////////////////////////////////////////////////////////////////////


/** 12. How to reverse a string? */

// const reverseString = (str) => {
//     let strToArr = str.split("")
//     return strToArr.reverse().join("")
// }

// console.log(reverseString("hello"))


////////////////////////////////////////////////////////////////////////////////////////////


/** 13. How to find palindrome? */

// const str = "rafat"

// const findIsPalindrom = (str) => {
//     reverseString = str.split("").reverse().join("").toLowerCase()
//     return reverseString === str ? true : false
// }
// console.log(findIsPalindrom(str))


////////////////////////////////////////////////////////////////////////////////////////////


/** 14. How to swap two variables without using third variable? */

// let a = 4;
// let b = 6;

// with third variable
// let temp = a
// a=b
// b=a

// without third variable

// [a, b] = [b, a]

// console.log(`value of variable a is ${a} and value of variable b is ${b}`)


////////////////////////////////////////////////////////////////////////////////////////////


/** 15. How to merge two arrays and sort them? */

// const arr1 = [ 15, 4, 2];
// const arr2 = [ 5, 30, 8];

// concat method

// const concatArr = arr1.concat(arr2);
// const sortedArr = concatArr.sort((a, b)=> a-b)

// spreadOperator method
// const concatWithSpread = [...arr1, ...arr2]

// const sortedArr = concatWithSpread.sort((a, b)=> a-b)
// console.log(sortedArr)

// const concatArr = arr1.concat(arr2)


////////////////////////////////////////////////////////////////////////////////////////////


/** 16. How to find factors of a given integer? */

// with positive number
// const num = 17
// console.log(`Factor of the number ${num}`)
// for(let i = 0; i<= num; i++){
//     if(num%i == 0){
//         console.log(`value is ${i}`)
//     }
// }

// with negative number

// const num = -12
// console.log(`Factor of the number ${num}`)
// for(let i = 0; i<= Math.abs(num); i++){
//     if(num%i == 0){
//         console.log(`value is ${-i}`)
//     }
// }


////////////////////////////////////////////////////////////////////////////////////////////


/** 17. How to make calculator? */

// const operator = prompt("Please choose you operator form +, -, *, / ");
// const firstNum = parseFloat(prompt("Kindly enter your first Number now")); //kindly use parseFloat because prompt take any value as a string
// const secondNum = parseFloat(prompt("Kindly enter your second Number now"));

// if (operator === "+") {
//   result = firstNum + secondNum;
// } else if (operator === "-") {
//   result = firstNum - secondNum;
// } else if (operator === "*") {
//   result = firstNum * secondNum;
// } else if (operator === "/") {
//   result = firstNum / secondNum;
// } else {
//   console.log("Something is wrong please enter a valid input");
// }

// console.log(result);


////////////////////////////////////////////////////////////////////////////////////////////


/** 18. How to compare to Arrays are equal or not? */

// const firstArray = [4, 34, 65, 6];
// const secondArray = [34, 6, 65, 4];

// const areEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false; // Check length first
//     return arr1.every(item => arr2.includes(item)); // Check each element
// };

// console.log(areEqual(arrOne, arrTwo)); // Output: false


////////////////////////////////////////////////////////////////////////////////////////////  


/** 19. How to find intersection of two Arrays/Sets? */

// const arr1 = [1, 2, 3, 5, 2]
// const arr2 = [3, 4, 1, 4, 4, 2]

// const intersection = arr1.filter(item => arr2.includes(item))

// console.log([... new Set(intersection)]) //set object is used to store unique values


////////////////////////////////////////////////////////////////////////////////////////////


/** 20. How to find union of two Arrays/Sets? */

// const arr1 = [1, 3, 5, 3, 6, 7]
// const arr2 = [2, 4, 7, 8, 2]

// const unionArray = [...arr1, ...arr2]

// console.log([...new Set(unionArray)])


////////////////////////////////////////////////////////////////////////////////////////////


/** 21. how to convert celsius to fahrenheit or fahrenheit to celsius? */

// let input = parseFloat(prompt("please enter the valid value"))
// const celsiusToFahrenheit = input*1.8 + 32
// console.log(celsiusToFahrenheit)

// const fahrenheitToCelsius = 5/9*(input - 32)
// console.log(fahrenheitToCelsius)


////////////////////////////////////////////////////////////////////////////////////////////


/** 22. How to convert Kilometer into Miles? */

// const inputValue = parseFloat(prompt("Kindly enter the valid value"))
// const factor = 0.621371;
// const kilometerToMiles = inputValue * factor

// console.log(kilometerToMiles)


////////////////////////////////////////////////////////////////////////////////////////////


/** 23. Program to convert First Letter of a String into Uppercase */

// let myName = "rafat alam saifi";

// const capitalizeString = (str)=>{
//     const spltArr = str.split(" ")
//     const newStr = spltArr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
//     return newStr
// }

// console.log(capitalizeString(myName))

/** 24. Program to find fibonacci sequence */

// var a = 0;
// var b = 1;

// for(let i = 0; i <= 15; i++){
// var temp = a+b
// a = b
// b = temp
// console.log(temp)
// }


////////////////////////////////////////////////////////////////////////////////////////////


/** 25. Program to print star and number patterns Right, Triangle, Pyramid and Diamond shape */

// // Right Angle
//     for (let i = 1; i <= 6; i++) {      // Outer loop controls the number of rows
//         for (let j = 1; j <= i; j++) {  // Inner loop controls the number of stars in each row
//             document.write("*" + "&nbsp;&nbsp;");  // Print a star followed by spaces
//         }
//         document.write("<br>");  // Move to the next line after each row is printed
//     }


// // Triangle
//     for (let i = 1; i <= 6; i++) {             // Outer loop controls the number of rows
//         for (let j = 1; j <= 6 - i; j++) {     // First inner loop for spaces
//             document.write("&nbsp;&nbsp;");    // Print spaces to align the stars
//         }

//         for (let k = 1; k <= i; k++) {         // Second inner loop for stars
//             document.write("*" + "&nbsp;&nbsp;");  // Print stars followed by spaces
//         }
//         document.write("<br>");  // Move to the next line after each row
//     }

// // Diamond
//     for (let i = 1; i <= 6; i++) {             // Outer loop controls the number of rows (1 to 6)
//         for (let j = 1; j <= 6 - i; j++) {     // First inner loop for leading spaces (decreases with each row)
//             document.write("&nbsp;&nbsp;");    // Print spaces to align the stars
//         }

//         for (let k = 1; k <= i; k++) {         // Second inner loop for stars (increases with each row)
//             document.write("*" + "&nbsp;&nbsp;");  // Print stars followed by spaces
//         }
//         document.write("<br>");  // Move to the next line after each row
//     }
//     for (let i = 1; i <= 6; i++) {             // Outer loop controls the number of rows (1 to 6)
//         for (let j = 1; j <= i; j++) {         // First inner loop for leading spaces (increases with each row)
//             document.write("&nbsp;&nbsp;");    // Print spaces to align the stars
//         }
    
//         for (let k = 1; k <= 6 - i; k++) {     // Second inner loop for stars (decreases with each row)
//             document.write("*" + "&nbsp;&nbsp;");  // Print stars followed by spaces
//         }
//         document.write("<br>");  // Move to the next line after each row
//     }


////////////////////////////////////////////////////////////////////////////////////////////


/** 26. Program to find number of Occurences of a character in a string */

var string = "Rafat Alam Saifi"
var letter = "a"

let strLen = string.length
var counter = 0

for(let i = 0; i < strLen; i++){
    if(string[i] == letter){
        counter++
    }
}

// console.log(`The ${letter} of ${string} is ${counter} times.`)


////////////////////////////////////////////////////////////////////////////////////////////


/** 27. Program to print the Table of any use defined number using function */

const number = 4;

const table = (num)=>{
    for(let i = 1; i <= 10; i++){
        var res = i * num
        console.log(`${num} X ${i} = ${res}`)
    }
}

// table(number)


////////////////////////////////////////////////////////////////////////////////////////////


/** 28. Program to check Armstrong Number */

// Armstrong number wo hota hai jiska digits ko unki sankhya ke power tak uthane par asli number milta hai, aur jo nahi milta, wo Armstrong number nahi hota.

// Armstrong Number Example:
// 153 ek Armstrong number hai kyunki 1*1*1 + 5*5*5 + 3*3*3 = 153

// Not Armstrong Number Example:
// 123 ek Armstrong number nahi hai kyunki 1*1*1 + 2*2*2 + 3*3*3 = 36, jo 123 se alag hai

function isArmstrongNumber(num) {
    // Convert the number to a string to get the number of digits
    let numStr = num.toString();
    let numDigits = numStr.length;
    
    // Initialize sum variable
    let sum = 0;

    // Loop through each digit in the number
    for (let i = 0; i < numDigits; i++) {
        // Get the digit at position i, raise it to the power of numDigits, and add to the sum
        let digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
    }

    // If the sum equals the original number, it is an Armstrong number
    return sum === num;
}

// Test the function with some examples
let testNumber = 153;
if (isArmstrongNumber(testNumber)) {
    console.log(`${testNumber} is an Armstrong number.`);
} else {
    console.log(`${testNumber} is not an Armstrong number.`);
}


////////////////////////////////////////////////////////////////////////////////////////////


/** 29. Find the nth value */

const numsArr = [ 1, 2, 3, 4, 5 ]
const position = 12

const index = (position - 1) % numsArr.length

const nthValue = numsArr[index]

// console.log(nthValue)

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




/** 3. What is the difference between '==' and '==='?  */

// == compares the data values 
// === compare the data values and types
 
// let x = 2;
// let y = "2"
// console.log(x == y) // true
// console.log(x === y) // false



/** 4. How to find second largest value, and remove first largest value in Array? */

const myArr = [1, 67, 34, 54, 2];

const secondLargestVal = (arr)=>{
    fLargVal = Math.max(...arr)
    index = arr.indexOf(fLargVal)
    arr.splice(index, 1)
    secLargVal = Math.max(...arr)
    return(secLargVal)
} 
console.log(secondLargestVal(myArr))

/** 5. What is difference between Filter() and Find() method?  */

/** 6. How to find the missing number in a given integer Array of 1 to 10? */

/** 7. How to find even or odd number in a given array? */

/** 8. How to find the sum of all elements in a given array?  */

/** 9. How to find Factorial(n!) of a given number?  */

/** 10. How to Find Prime number? */

/** 11. How to find vowels from string? */

/** 12. How to reverse a string? */

/** 13. How to find palindrome? */

/** 14. How to swap two variables without using third variable? */

/** 15. How to merge two arrays and sort them? */

/** 16. How to find factors of a given integer? */

/** 17. How to make calculator? */

/** 18. How to compare to Arrays are equal or not? */

/** 19. How to find intersection of two Arrays/Sets? */

/** 20. How to find union of two Arrays/Sets? */

/** 21. how to convert celsius to fahrenheit or fahrenheit to celsius? */

/** 22. How to convert Kilometer into Miles? */

/** 23. Program to convert First Letter of a String into Uppercase */

/** 24. Program to find fibonacci sequence */

/** 25. Program to print star and number patterns Rightn Triangle, Pyramid and Diamond shape */

/** 26. Program to find number of Occurences of a character in a string */

/** 27. Program to print the Table of any use defined number using function */

/** 28. Program to check Armstrong Number */

/** 29.  */

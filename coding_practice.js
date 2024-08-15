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

// const myArr = [1, 67, 34, 54, 2];

// const secondLargestValue = (arr)=>{
//    const firstLargestValue = Math.max(...arr);
//     const index = arr.indexOf(firstLargestValue)
//     arr.splice(index, 1)
//     const secLarVal = Math.max(...arr)
//     return secLarVal
// }

// console.log(secondLargestValue(myArr))




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
//     return(missArr)
// }

// console.log(missingValue(numArr))

// example to know how to loop works

// for (i=1; i<10; i++){ 
//     console.log(i)
// }



/** 7. How to find even or odd number in a given array? */

// const arrNumbers = [ 1, 2, 53, 84, 5, 16, 7, 38, 19, 10]

// const evenVals = (arr)=>{
//     return arr.filter(item => item%2===0)
// }

// const oddVals = (arr)=>{
//     return arr.filter(item => item%2!==0)
// }

// console.log(evenVals(arrNumbers))
// console.log(oddVals(arrNumbers))




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

/** 9. How to find Factorial(n!) of a given number?  */

const numArr = [ 5, 3, 6, 2 ]

let fact = 1
const factFunc = (arr)=>{
    for( let i = 0; i < arr.length; i++){
        fact *= arr[i]
    }
    return fact
}

console.log(factFunc(numArr))


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

/** 29. Find the nth value */

// const numsArr = [ 1, 2, 3, 4, 5 ]
// const position = 12

// const index = (position - 1) % numsArr.length

// const nthValue = numsArr[index]
// console.log(nthValue)



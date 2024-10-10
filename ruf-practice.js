/** 1. How to find duplicate elements in a given Array?  */

const newArr1 = [1, 2, 3, 2, 4, 3, 5, 5, 4]

const duplicateArr = newArr1.filter((item, index, arr)=> arr.indexOf(item) !== index)

// console.log(duplicateArr)

/** 2. How to find Max and Min value in a given Array?  */

const fewVals = [71, 24, 54, 35, 89, 32, 90]

const maxVal = (arr)=>{
    return arr.reduce((pre, cur)=> pre > cur ? pre : cur)
}

const minVal = (arr)=>{
    return arr.reduce((pre, cur)=> pre > cur ? cur : pre)
}

// console.log(`maximum value is ${maxVal(fewVals)} & minimum value is ${minVal(fewVals)}`)

/** 3. What is the difference between '==' and '==='?  */

// == is compares the data values 
// === is compare the data values and type as well

const x = 2;
const y = "2"

// console.log(x === y)

/** 4. How to find second largest value, and remove first largest value in Array? */

const fewVals2 = [71, 24, 54, 35, 89, 32, 90]

const secLargVal = (arr)=>{
    const firstLarVal = arr.reduce((pre, cur)=> pre > cur ? pre : cur)
    const index = arr.indexOf(firstLarVal)
    arr.splice(index, 1)
    return arr.reduce((pre, cur)=> pre > cur ? pre : cur)
}

// console.log(`Second Largest Value is ${secLargVal(fewVals)}`)

/** 5. What is difference between Filter() and Find() method?  */

// filter returns the all matched Elements in the new Array
// find returns only first matched Element

const objArr = [
    { name: "samar", score: 1},
    { name: "rafat", score: 2},
    { name: "afreen", score: 3},
    { name: "asif", score: 4},
    { name: "zareen", score: 5},
]

const filterIt = objArr.filter(item=> item.score > 3)
// console.log(filterIt)

const findIt = objArr.find(item=> item.score > 3)
// console.log(findIt)

/** 6. How to find the missing number in a given integer Array of 1 to 10? */

const simpleArr = [1, 2, 3, 5, 7, 8, 10]
const missArr = []

const findMissArr = (arr)=>{
    const maxVal = Math.max(...arr)
    const minVal = Math.min(...arr)

    for(let i = minVal; i <= maxVal; i++){
        if(arr.indexOf(i) < 0){
            missArr.push(i)
        }
    }
    return missArr
}

// console.log(findMissArr(simpleArr))

/** 7. How to find even or odd number in a given array? */

const newArr2 = [1, 2, 3, 4, 5, 6]

const evenVals = newArr2.filter(item => item%2 == 0)
const oddVals = newArr2.filter(item => item%2 !== 0)

// console.log(evenVals)
// console.log(oddVals)

/** 8. How to find the sum of all elements in a given array?  */

const newArr3 = [1, 2, 3, 4, 5, 6]


const sumAll = (arr)=>{
    // return arr.reduce((pre, cur)=> pre + cur)
    let sum  = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumAll(newArr3))



/** 9. How to find Factorial(n!) of a given number?  */

/** 10. How to Find Prime number? */

/** 11. How to find vowels from string and find number of vowels? */

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

/** 25. Program to print star and number patterns Right, Triangle, Pyramid and Diamond shape */

/** 26. Program to find number of Occurences of a character in a string */

/** 27. Program to print the Table of any use defined number using function */

/** 28. Program to check Armstrong Number */

/** 29. Find the nth value */


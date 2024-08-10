// Reverse String

// const text = "Hello";
// const spText = text.split("");
// const revText = spText.reverse();
// console.log(revText);

// const myStr = "hello"
// const strSplt = myStr.split("")
// const revStr = strSplt.reverse()
// const joinStr = revStr.join("")
// console.log(joinStr)

// const myFunc = (str) => {
//   const strText = str.split("");
//   return strText.reverse();
// };

// const output = myFunc("hello");
// console.log(output);

// OR

// const myFunc = (str) => {
//   const strText = str.split("");
//   strText.reverse();
//   console.log(strText);
// };

// myFunc("hello");

// Reverse String and join

// const strRevJoin = (str) => {
//   const strText = str.split("");
//   strText.reverse();
//   return strText.join("");
// };

// const output = strRevJoin("Hello");
// console.log(output);

// OR

// function strVal(str) {
//   return str.split("").reverse().join("");
// }
// const output = strVal("hello");
// console.log(output);

// OR
// const myStr = (str) => {
//   let revString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString = revString + str[i];
//   }
//   return revString;
// };

// const output = myStr("hello");
// console.log(output);

// OR

// const myStr = (str) => {
//   let emptyStr = "";
//   for (let i = 0; i < str.length; i++) {
//     emptyStr = str[i] + emptyStr;
//   }
//   return emptyStr;
// };

// const output = myStr("hello");
// console.log(output);

// OR

// const myStr = (str) => {
//   let emptyStr = "";
//   for (let char of str) {
//     emptyStr = char + emptyStr;
//   }
//   return emptyStr;
// };

// const output = myStr("hello");
// console.log(output);

// OR

// const myStr = (str) => {
//   let emptyStr = "";

//   str.split("").forEach((char) => (emptyStr = char + emptyStr));
//   return emptyStr;
// };

// const output = myStr("hello");
// console.log(output);

// IsPalindrom

// const myStr = (str) => {
//   const revString = str.split("").reverse().join("");
//   return revString === str;
// };

// const output = myStr("racecar");
// console.log(output);

// Reverse Integer

// const myInt = (int) => {
//   const intStr = int.toString().split("").reverse().join("");
//   return parseInt(intStr) * Math.sign(int);
// };

// const output = myInt(-12345);
// console.log(output);

// capitalize letters

// const strCap = (str) => {
//   let strArr = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(" ");
// };

// const output = strCap("I LOve JAVAscript");
// console.log(output);

// const strCap = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((w) => {
//       return w[0].toUpperCase() + w.substr(1);
//     })
//     .join(" ");
// };

// const output = strCap("i love javascript");
// console.log(output);

// Max Character

// const maxChar = (str) => {
//   const charMap = {};
//   str.split("").forEach((elem) => {
//     if (charMap[elem]) {
//       charMap[elem]++;
//     } else {
//       charMap[elem] = 1;
//     }
//   });
//   return charMap;
// };

// const output = maxChar("i Love javaScript");
// console.log(output);

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz();

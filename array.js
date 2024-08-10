const fruits = ["apple", "orange", "mango"];
const fruits2 = ["banana", "watermelon", "papaya"];
const fruits3 = ["apple", "orange", "banana", "watermelon"];
const num = [2, 3, 4, 1, 1, 7, 6];
const numString = ["25", "100", "2", "1"];
const newNum = [
  [1, 3],
  [2, 4],
  [5, 6],
];

const str = "Rafat";

const objArray = [
  { name: "asif", number: 20 },
  { name: "rafat", number: 10 },
  { name: "samar", number: 16 },
];

const table = [2, 4, 6, 8, 10];
// length
// const arrLen = fruits.length;

//toString()
// const arrToString = fruits3.toString();

// join
// const arrJoin = fruits3.join("-");

//pop
// const arrpop = fruits3.pop();

//push (return new array)
// const arrpush = fruits3.push("papaya");

//shift
// const arrShift = fruits3.shift();

//unshift
// const arrUnshift = fruits3.unshift("avocado");

//at()
// const newFruits = fruits3.at(2);

//[]
// const newFruits = fruits3[2];

//delete
// const arrDel = delete fruits[0];

//concat
// const arrConcat = fruits.concat("tomato");

//splice added
// const arrSplice = fruits.splice(1, 0, "tomato");

//splice removed
// const arrSpliceRm = fruits3.splice(2, 2, "volvo");
// const arrpliceRm = fruits3.splice(2, 1);
// const arrRemove = fruits3.splice(2, 1, "Volvo");

//slice
// const arrSlice = fruits3.slice(1, 2);

//sort
// const arrSort = fruits3.sort();
// const arrSort = num.sort(); //assending sort
// const arrReverse = num.reverse(); //descending
//const arrSortString = numString.sort(); //sorting numbers in string form in an array, this will produce an incorrect sorting
// const arrNumSort = numString.sort((a, b) => a - b);  to sort numbers in ascending order
// const arrNumSortDes = numString.sort((a, b) => b - a);

//random sorting
// const arrSortRan = numString.sort(() => 0.5 - Math.random());

//highest value
// const arrSort = numString.sort((a, b) => a - b);
// const valLow = arrSort[0]; lowest value
// const valHi = arrSort[arrSort.length - 1]; highest value

//object array
// const objSort = objArray.sort((a, b) => a.number - b.number); sorting an object

//constructor
// const arrConst = fruits.constructor;

//copyWithin
// const arrCopy = fruits3.copyWithin(1, 0);

//entries
// const arrEntr = fruits3.entries();
// for (let x of arrEntr) {
//   console.log(x);
// }

//every
//const arrEvery = num.every((n) => n >= 1); //checking the condition for every element and return the boolean value

//fill
//const arrFill = fruits3.fill("kiwi", 1, 3); //adding value from start to end (value, start, end), but default value is 0 index

//filter
// const arrFilter = num.filter((n) => n != 1); // this returns the matched values and creates a new array

//find
// const arrFind = num.find((n) => n == 3); //this will return only one element\(first index) from an array

//findIndex
// const arrFinInd = num.findIndex((n) => n == 4); //this will return index element

//flat
// const arrFlat = newNum.flat();
// const newArr = arrFlat.flat();

//flatMap
// const arrFlatMap = num.flatMap((n) => n * 2); //this will flat first to all of the array and then will iterate every element

//forEach
// let sum = 1;
// num.forEach((n) => (sum *= n));
// &
// let myFunction = (number, index)=>{
//   console.log(`The item on index ${index} is ${number}`)
// }
// num.forEach(myFunction)

//from
// const arrFrom = Array.from(str);

//include
// const arrInclude = num.includes(6); // it will return true or false if value is avalabile or not accordingly

//indexOf
// const indVal = [1, 2, 3, 1, 4, 5];
// const arrIndexOf = indVal.indexOf(1, 1); //it will define the position of the element or a poisition from a particular index

//lastIndexOf
// const arrLastInd = num.lastIndexOf(1);

//isArray
// const arrIsArr = Array.isArray(fruits); //This will return boolean value, that the actual value is array or not

//map
// const arrMap = num.map((n) => n);

// prototype //this will be used to upper case every element inside array
// Array.prototype.arrUpper = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// fruits.arrUpper();

//reduce
// const arrReduce = num.reduce((total, num) => total - num); //it start from left to right and scape the 0 index

//reduceRight
// const arrRedRight = table.reduceRight((total, num) => total - num);

//valueOf
// const arrValOf = fruits3.valueOf();

// num.forEach((n) => n * 2);

// num.forEach((n) => console.log(n * 2));
num.forEach(n => console.log(n *2))
// console.log(num)
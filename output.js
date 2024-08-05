// 1
// let a = []
// let b = []
// console.warn(a==b)
// console.warn(a===b)

//2
// let a = []
// let b = a
// console.warn(a==b)
// console.warn(a===b)

//3
// let a = [20];
// let b = [20];
// console.warn(a[0] == b[0]);
// console.warn(a[0] == b[0]);

//4
// let z=[1,2,3,4]
// let a = { name: "anil"};
// console.warn(...z)

//5
// console.warn(typeof Nan); //Not A Number

//6
// let data = 10 - -10;
// console.warn(data);

//7
// const set = new set([1, 1, 2, 3, 4]);
// console.warn(set);

//8
// let data = { name: "Anil" };
// console.warn(delete data.name);

//8.2
// const data = { name: "Anil" };
// console.warn(delete data);

//9
// const data = ["Peter", "Anil", "sam"];
// const [y] = data;
// console.log(y);

//10
// const data = ["Peter", anil, "sam"];
// const [y] = data; // how to get second element
// console.log(y);

//11
// const data = { name: "anil", age: 29, skill: "JS"};
// const {age} = data;
// console.warn(age); // how to get name property without . operator

//12
// let data = { name: "anil", age: 29, skill: "JS"};
// let info = { city: "Noida", mail: "anil@test.com"};
// // data = {...data, ...info}
// // merge 2 object
// console.warn(data)

//13
// let data = { name: "anil", age: 29, skill: "JS"};
// let info = { city: "Noida" };
// data = {data, ...info};
// console.warn(data);

//14
// let data = { name: "anil", age: 29, skill: "JS"};
// let info = { city: "Noida", skill: "Node" };
// data = {data, ...info};
// console.warn(data);

//15
// const name = 'Anil';
// console.log(name());

//16
// const result = false || false || '';
// console.warn(result);

//17
// const result = null || false || "";
// console.warn(result);

//18
// const result = [] || 0 || true;
// console.warn(result);

//19
// console.warn(Promise.resolve(5));

//21
// JSON.parse();
// what this method will do
// A: Parses JSON to a JavaScript value
// B: Parses a JavaScript object to JSON
// c: Parses any JavaScript value to JSON
// D: Parses JSON to a JavaScript object only

//22
// let name = 'sidhu':
// function getName(){
//  console.log(name);
//  let name = 'anil';
// }
// getName();

//23
// let name = 'anil';
// function getName(){
//   console.log(name);
//  }
// getName();

//24
// console.log((x => x)('I love'));
// console.log(`${(x => x)('I love')} to program`);

//25
// function sumValues(x, y, z){
// return x + y + z
// }
// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
// C: sumValues(...[1, 2, 3])
// D: sumValues([1, 2, 3])

//26
// const name = 'code step by step';
// console.log(!typeof name === 'object);
// console.log(!typeof name === 'string');
// console.log(!typeof name ==== false);

//27
// const name = "Subscribe";
// const age = 21;
// console.log(isNan(name));
// console.log(isNan(age));

//28
// let person = { name: "Anil" };
// //what can modify person object
// Object.seal(person);
// console.warn(person);

//29
// let data = [2, 9, 0, 10];
// // remove first element
// console.warn(data);

//30
// let data = [2, 9, 0, 10];
// // remove last element
// data.pop()
// console.warn(data);

//31
// let a = 31
// console.warn(a%2);
// check any value is odd or event

//32
// let data={
// name: "anil"
//  }
// delete data.name;
// console.warn(data)

//33
//let data = "true";
// // convert data to boolean false value
// console.warn(!data);

//33.2
//let data = "true";
// // convert data to boolean true value
// console.warn(!data);

//34
// difference between map and forEach function

//35
// let data = ["anil", "peter", "bruce"];
// delete data[1];
// console.warn(data)

//36
// let data = ["anil", "peter", "bruce"];
// delete data[1];
// console.warn(data.length)

//37
// merge two array
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.warn(c)

//37.2
// let a = [1, 2, 3, 4];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.warn(c)

//38
// let c = 3 ** 3;
// console.warn(c);

//39
// let a = 2;
// setTimeout(()=>{
//  console.warn(a)    
//}, 0)
// a= 100;

//40
// let a = 2;
// let A = 30;
// console.warn(A);

//41
// let A10 = "like";
// // let 10A = "okay";
// console.warn(A10);

//42
// let a = "like";
// // let b = "like";
// console.warn(a === b);

//43
// let a = 1;
// let c = 2;
// console.warn(--c === a);

//44
// let a = 1;
// let b = 1;
// let c = 2;
// console.warn(a === b === --c);

//45
// console.warn(3 * 3)
// console.warn(3 ** 3)
// console.warn(3 *** 3)

//46
// console.warn(a)
// var a;

//47
// console.war(b)

//48
// console.warn([[[[]]]])

//49
// how to find OS name

//50
// let for = 100

//51
// function fruit(){
//  console.log(name);
//  console.log(price);
//  var name = "apple";
//  let price = 20;
//}
// fruit();

//52
// for (var i = 0; i < 3; i++){
//  setTimeout(()=> console.log(i), 1)};
// }

//53
// for (let i = 0; i < 3; i++){
//  setTimeout(()=> console.log(i), 1)};
// }

//54
// console.warn(+true);
// console.warn(typeof +true);

//55
// console.warn(!"anil");
// console.warn(typeof(!"anil"));

//56
// let data = "size";
// const bird = {
//    size: "small",
// };
// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);

//57
// let c = { name: "peter" };
// let d;
// d = c;
// c.name = "anil";
// console.log(d.name);

//58
// var x;
// var x = 10;
// console.log(x);

//59
// var x;
// let x = 10;
// console.log(x);

//60
// let a = 3;
// console.log(a == b);
// console.log(a === b);

//61
// let name;
// nmae = {}; // Typo!
// console.log(name);

//62
// function fruit() {
//  console.log("Woof!");
// }
// fruit.name = "apple";
// fruit()

//63
// function sum(a, b) {
// return a + b;
// }
// console.warn(sum(1, "2"))

//64
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

//65
// function getAge(...args){
// console.log(typeof args);
//}
// getAge(21);

//66
// function getAge(){
//  'use strict';
//  age = 21;
//  console.log(age);
// }
// getAge();

//67
// const sum = eval('10*10+5');
// console.warn(sum)

//68
// **How long is cool_secret accessible?
// sessionStroage.setItem('cool_secret', 123);

//69
// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1"))
// console.warn(obj.hasOwnProperty(1))

//70
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);

//71
// for (let i = 1; i < 5; i++ ) {
//  if(i === 3) continue;
// console.log(i);
// }

//72
// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();

//<div>
//<! -- 73 -- >
//<! -- <div onclick = "console.log('first div')">
//  <div onclick="console.log('second div')">
//  <div onclick="console.log('second div')">
//  <button onclick="console.log('button')">
//      Click!
//  </button>
//  </div>
//  </div>
//</div> -->

//74
// const person = { name: 'anil' };
// function sayHi(age) {
//  return `${this.name} is ${age}` };
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

//75
// function sayHi(){
// return(() => 0)();
//  }
// console.log(typeof sayHi());

//76
// function sayHi(){
// return () => 0;
// }
// console.log(typeof sayHi());

//77
// console.log(typeof typeof 1);

//78
// const numbers = [1, 2, 3];
// numbers[6] = 11;
// console.log(numbers);

//79
// const numbers = [1, 2, 3]
// numbers[9] = numbers;
// console.log(numbers);

//80   Everything in JavaScript is either a...
// A: primitive or object
// B: function or object
// B: trick question! only objects
// B: number or object

//81
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);


//82
// console.warn(setInterval(() => console.log('Hi'), 1000))
// console.warn(setInterval(() => console.log('Hi'), 1000))
// console.warn(setInterval(() => console.log('Hi'), 1000))

//83
// console.log([..."anil"]);

//84
// const firstPromise = new Promise((res, rej) => {
//    setTimeout(res, 500, 'one');
//   });

// const secondPromise = new Promise((res, rej) => {
//    setTimeout(res, 100, 'one');
//   });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//85
// let person = { name: 'peter };
// const members = [person];
// person = null;
// console.log(members);

//86
// const person = {
// name: "batman",
// age: 21,
// };

// for (const item in person){
//  console.log(item);
// }

//87
// let data = 3 + 4 + '5';
// console.log(typeof data);

//88
// console.log(typeof 3 + 4 + '5');

//89
// console.log(typeof (3 + 4 + +'5'));

//90
// console.log([] == []);

//91
// let data = [1, 2, 3].map(num => {
//  if (typeof num === 'number') return;
//  return num * 2;
//  });
//  console.warn(data);

//92
// function getInfo(member){
// member.name = 'Anil';
// }
// const person = { name: 'Sarah'};

// getInfo(person);
// console.log(person);

//93
// function Car(){
// this.make = 'tata';
// return {make: 'Kia'};
// }
// const myCar = new Car();
// console.log(myCar.make);

//94
// (() => 
//  let x = (y = 10);
// })();

// console.log(typeof x);

//95
// (() => {
//  let x = y = 10;
// // let x;
// })();

// console.log(typeof y);

//96
// (() => {
//  let x = 10;
//  })();

// (()=> {
//  let x = 10;
//  })();

// console.log(typeof x);

//97
// (() => {
//  let x = y = 10;
//  })();

// (()=> {
//  let x = y = 20;
//  })();

// console.log(y);

//98
// let x = 100;
// (() => {
//  var x = 20;
//  });
// console.log(x);

//99
// console.warn(!true - true);

//100
// console.warn(true + +"10");
// const myFunc = () => {
// 	const message = "Hi";
// 	const firstName = document.getElementById("firstName").value;
// 	const lastName = document.getElementById("lastName").value;
// 	document.getElementById(
// 		"myDiv",
// 	).innerHTML = `${message} ${firstName} ${lastName} !`;
// 	console.log(`${message} ${firstName} ${lastName} !`);
// 	console.warn("Text may be wrong");
// 	console.error("error can be occured");
// 	console.log("hello", 4 + 6, "world");
// };

// var firstName = "Rafat"; //declare
// var firstName = "asif";	//redeclare

// let lastName = "Alam" //declare cannot redeclare
//  lastName = "saifi"  //reassign

//  const age = 20 //declare

// console.log(firstName)
// console.log(lastName)
// console.log(age)

// let sentence = "   This is Rafat Alam Saifi, I am an Indian and    I am happy.   "

// console.log(sentence.lastIndexOf("I"))
// console.log(sentence.length)
// console.log(sentence.indexOf("i"))
// console.log(sentence.slice(0,4))
// console.log(sentence.replace("Rafat", "Asif"))
// console.log(sentence.trim())

// let myName = "Rafat Alam Saifi"
// let temp = `My \nname \t is ${myName}`
// document.getElementById('myDiv').innerHTML = temp
// console.log(temp)

// const result = {
// 	Rafat: 80,
// 	Asif: 90,
// 	["Samar 2"]: 95,
// };

// console.log(result.Rafat, result.Asif, result["Samar 2"]);

// const a = true;
// const b = false;

// console.log(a, b);

// const und = undefined;
// console.log(und);

// const n = null;

// console.log(n);

// const arr = [1, 2, 3, "rafat", 10];
// console.log(arr);
// const myAlert = alert("Hello World");
// console.log(myAlert);

// const myPrompt = prompt("What is your name", "Hello World");
// console.log(myPrompt);

// const confirmation = confirm("Do you want to delete this post");

// if (confirmation === true) {
// 	console.log("Deleted");
// } else if (confirmation === false) {
// 	console.log("Not deleted");
// }

// function avg(firstValue, secondValue) {
// 	return (firstValue + secondValue) / 2;
// }
// const myResult = [avg(12, 14), avg(5, 8)];
// const a = avg(12, 14);
// const b = avg(5, 8);
// console.log(a, b);

// function printName(myName) {
// 	console.log(myName);
// }

// printName("rafat");
// printName("suhail");

// function add(firstValue, secondValue) {
// 	return firstValue + secondValue;
// }

// const result = add(4, 6);
// console.log(result);

// const add = (firstValue, secondValue) => {
// 	return firstValue + secondValue;
// };

// const myResult = add(34, 76);
// console.log(myResult);

// function time() {
// 	const myTime = Date();
// 	return myTime;
// }

// const myDate = time();
// console.log(myDate);

// function myDate() {
// 	newTime = () => {
// 		const myTime = Date();
// 		document.getElementById("myDiv").innerHTML = myTime;
// 	};
// 	setInterval(() => {
// 		newTime();
// 	}, 1000);
// }

// const elem = document.getElementById("myDiv");
// console.log(elem);

// const elemClass = document.getElementById("myIndia");
// console.log(elemClass.innerHTML);

// const elemClass = document.getElementsByClassName("myWorld")
// console.log(elemClass[1].innerHTML)

// elemClass[0].classList.add('bg-primary');
// elemClass[1].classList.add("text-secondary");

// const myNewClass = document.getElementsByClassName("bg-primary")
// console.log(myNewClass[0].innerHTML)

// const tagName = document.getElementsByTagName('div')
// console.log(tagName[3].innerText)

// const targetElement = document.getElementsByTagName('div')

// const newElement = document.createElement("p")
// newElement.innerText = "This is created text"

// targetElement[0].appendChild(newElement)

// const myNewElement = document.createElement("b");
// newElement.innerText = "This is my bold"

// targetElement[0].replaceChild(newElement, myNewElement)

// document.querySelectorAll(".myWorld")

// if (totalFruits < 30){
//     console.log("less than 30")
// }else{console.log("not less than")}
// const totalFruits = 29

// if(totalFruits > 30){
// console.log("This is more than 30")}
// else if(totalFruits <= 30){
// console.log("This is equal")}

// const marks = 90

// switch (marks){
//     case 90:
//         console.log("rafat has this money")
//         break;
//     case 30:
//         console.log("Rohan has this money")
//         break;
//     default:
//         console.log("no one has money")
//         break;
// }

// const color = "orange";

// switch (color){
//     case "red":
//         console.log("Color is red")
//         break;
//     case "green":
//         console.log("Color is green")
//         break;
//     case "orange":
//         console.log("Color is orange")
//         break;
//     default:
//         console.log("There is no color matched")
//         break
// }

// const myArray = [1, 3, 45, 6];

// for (let i = 0; i < myArray.length; i++) {
//     if (i == 2) {
//         break;
//     }
//     console.log(myArray[i]);
// }

// const persons = [1, 2, 3, 4, 5, 6, 7]

// for (let i = 0; i<persons.length; i++){
//     if (i === 3){
//     continue
// }
// console.log(persons[i])}

// for (let i = 2; i<persons.length; i++){
//     console.log(persons[i])
// }

// const myMarks = [{Maths: 56},{English: 56},{Urdu: 85},{Sanskrit: 60}]

// myMarks.forEach(function(element){
// console.log(element)})

// let i = 0;

//     while(i<persons.length){
//     console.log(persons[i])
//     i++;
// }

// let i = 0

// do{
// console.log(persons[i])
// i++}
// while (i<persons.length)

// for (element of persons) {

//     console.log(element)
// }

// const marks = {
//     maths: 40,
//     English: 90,
//     Hindi: 45,
//     Panjabi: 95
// }

// for (key in marks){
// console.log(`${key} marks is ${marks[key]}`)}

// use of Array

// const myArray = ["rafat", 32, true, null, undefined]

// let myArr = [1, 2, 3, 4, 5]

// console.log(myArray.length)
// const myValue = myArray.pop()
// const myValue = myArray.push("hello")
// console.log(myValue);

// myArr.toString()

// console.log(myArr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

// let myArr = [1, 2, 3, 4]

// myArr.shift()                  // remove the first index
//myArr.unshift("rafat")          // to add on the first index
// myArr.pop()                  // to remove the last index
//myArr.push("samar")             // to add on the last index
// myArr.toString()

// let newLength = myArr.shift()
// console.log(newLength)

// window.onload = function(){
// console.log("The document loaded")}

// document.getElementById("myIndia").addEventListener("click", function(){
//     console.log("clicked")
// })

// document.getElementById("myIndia").addEventListener("mousedown", function(){
//     console.log("mouseDown")
// })

// document.getElementById("myIndia").addEventListener("mouseenter", function(){
//     console.log("mouseEnter")
// })

// let myDate = new Date()
// console.log(myDate.getTime())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())
// console.log(myDate.getSeconds())

// console.log(myDate)

// let dt = new Date(1000);
// console.log(dt)

// let myDt = new Date("2029-09-30")
// console.log(myDt)

// let myDt = new Date("2029-09-30")

// let myDate = new Date(3030,4,3,5,6,7)
// console.log(myDate)

// let value1 = -56.56;
// let value2 = 25

// console.log(Math.abs(value1))

// let number = Math.random()
// console.log(number)

// let love = "hello";
// console.log(love);

// const myData = localStorage.setItem("name", "Rafat");
// console.log(myData);
// localStorage.clear();
// const myGetData = localStorage.getItem("name");
// console.log(myGetData);
// const removeItem = localStorage.removeItem("name");
// console.log(removeItem);

// const setSession = sessionStorage.setItem("myName", "Rafat Alam");
// console.log(setSession);
// const getSession = sessionStorage.getItem("myName");
// console.log(getSession);

// const obj = { name: "Rafat", address: "Sambhal", state: "up" };
// const jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// const parsedData = JSON.parse(
//   `{"name":"Rafat","address":"Sambhal","state":"up"}`
// );
// console.log(parsedData);
// console.log(typeof parsedData);

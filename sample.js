// let x = 10;
// let y = 20;

// function add( a, b){
//     return a+b;
// }
// console.log(add(x, y));


// var stringNum = "5";
// let nomralNum = 5;
// if (stringNum === nomralNum) {
//     console.log("Both numbers are equal.");
// }else {
//     console.log("Numbers are not equal.");
// }   

// let age = 19;
// function checkAge(x){
//     if(x > 18){
//         console.log("Adult");
//     }else{
//         console.log("Minor");
//     }
// }
// checkAge(age);

// console.log(m);
// let m = 15;

// console.log(n);
// var n = 25;

// //hoisting allows let declared variables not to be accessed before initialization while allwos var declared variables to be accessed before initialization.
// //var allaows redeclaration while let does not allow redeclaration.

let q1 = null;
let q2;
console.log(q1);
console.log(q2);

fruit = "apple";

switch(fruit){
    case "mango":{
        console.log("Mango is selected");
        break;
    }
    case "apple":{
        console.log("Red aplple is selected");
        break;
    }
    default:{
        console.log("Unknown fruit");
    }
}

const myObject = { a: 1, b: 2, c: 3 };
for (let key in myObject) {
    console.log(key); 
    console.log(myObject[key]); 
}


const myArray = [10, 20, 30];
for (let value of myArray) {
    console.log(value);
}

const myString = "hello";
for (let char of myString) {
console.log(char); 
}

let age = 20;
let res = age > 18 ? console.log("Adult") : console.log("Minor");    

const greet = (name) => {
    console.log(`Hello, ${name}`);
}
//this instance cannot be used in arrow functions. and  they do not have their own this context.


const arr1 = [1, 2, 3];
const arr2 = [0, ...arr1,4, 5];
console.log(arr2);

const obj = {name : "raji", age : 25};
const objClone = {...obj, city : "NY"};
console.log(objClone);

const nums = [1,2,3,4,5];
const [one, two, ...rest] = nums;
console.log(one);
console.log(two);
console.log(rest);  

const [first, , third] = nums;
console.log(first);
console.log(third);

info = {name : "raji", age : 25}
const {personName, personAge} = info;
console.log(personName);
console.log(personAge);
console.log(info.name);

//original vaue is preserved in map
const evenNums = nums.map((num) => {return num * 2; });

//spread ==> operators   rest ==> parameters
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2,3,4,5));

const arr3 = [10, 20, 30, 40, 50];
arr3.push(60);
arr3.shift();
arr3.unshift(5);
arr3.pop();
console.log(arr3);

const sea =  " arabian sea ";
console.log(sea.trim());
console.log(sea.toUpperCase());
console.log(sea.toLowerCase());
console.log(sea.length);
console.log(sea.concat(" is beautiful"));
console.log(sea.replace("arabian", "red"));
console.log(sea.split(" "));
console.log(sea.substring(1,5));
console.log(sea.slice(1,5));
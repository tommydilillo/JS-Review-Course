/*****************************
 * Variables and date types
 


// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';
// var if = 23;


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried)
job + '. Is he married? ' + isMarried;

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);



/*
Basic Operators
*/

/*

var year, yearJohn, yearMark;
now = 2018
ageJohn = 28
ageMark = 33

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "string");
var x;
console.log(typeof x);


/*******************
 * Operator precedence
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 189;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

// Multiple assignments (associativy example)
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++
console.log(x);

*/

/************
 * CODING CHALLENGE 1 
 */

// var markMass, markHeight, johnMass, johnHeight;
// markMass = 80; //kg
// markHeight = 2; // meters
// johnMass = 100;
// johnHeight = 1.5;

// markBMI = markMass / (markHeight * markHeight);
// console.log('Mark BMI:', markBMI);
// johnBMI = johnMass / (johnHeight * johnHeight);
// console.log('John BMI:', johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);


/************
 * If / Else Statements 
 */


// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!')
// }
// else {
//     console.log(firstName + ' will hopefully marry soon :)')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!')
// }
// else {
//     console.log(firstName + ' will hopefully marry soon :)')
// }

// var markMass, markHeight, johnMass, johnHeight;
// markMass = 80; //kg
// markHeight = 2; // meters

// johnMass = 100;
// johnHeight = 1.5;

// markBMI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }


/************
 * Boolean Logic
 */

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy');

// } else if (13 <= age && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if (20 <= age && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }

/************
 * The Ternary Operator and Switch Statements 
 */

// var firstName = 'John';
// var age = 20;

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// /*if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }*/


// // Switch Statement

// var job = 'designer';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }


// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case (age >= 20 && age < 30):
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

/************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN 
// truthy values: NOT falsy values

/*var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}

*/

/************
 * Coding Challenge 2
 */

var johnAvg = (89 + 120 + 103) / 3;
var mikeAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134 + 105) / 3;
console.log(johnAvg, mikeAvg, maryAvg);


if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('John Wins with ' + johnAvg + ' points');
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike Wins with ' + mikeAvg + ' points');
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
    console.log('Mary Wins with ' + maryAvg + ' points');
} else {
    console.log('It\'s a tie!');
}

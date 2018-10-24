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

var markMass, markHeight, johnMass, johnHeight;
markMass = 80; //kg
markHeight = 2; // meters
johnMass = 100;
johnHeight = 1.5;

markBMI = markMass / (markHeight * markHeight);
console.log('Mark BMI:', markBMI);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log('John BMI:', johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);






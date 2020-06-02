//var str = 'Hello World'; // THis is how we declare strings
// Setting a variable equal to an Array
// Arrays are defined with []
// Grabbing an item from array is called indexing an array
// For example arr[1] would give us the value at index 1

// Arrays aren't immutable, they can be changed

// Adding items
// - to the end of an array using push
// - the beginning of an array using unshift()
// console.log = ('Hello World');
// Setting a variable equal to an Array
// Methods: Length, push, unshift, pop

//             0          1        2       3  
var arr = ['Desmond', 'Sisters', 'Mom', 'Dad'];

console.log("Log 1: ", arr);

arr.splice(0, 0 , 'Mom');

console.log("Log 2: ", arr);

// console.log("Log 1: ", arr);

//Goal: Turn a string into an array and add a value, then change it back to a string
var str = 'Hello World'
var arr = str.split(' ');
arr.splice(5, 1, '-')
arr =arr.join('')
console.log(arr)

var arr = [];
var str = '';
var obj = {};

console.log(typeof odj); // is 

//Null

var thing = (Null);
// 1 2 3 4 5 6 7 8

// 9 10 11 12 13 14 15 16

// 17 18 19 20 21 22 23 24 -> Null

// Null - the absence of Nothing
var thing2;
console.log(thing2);
//Undefined
// - Example:
// - Not the same as not defined
// - Relates to Hoisting
// - Item (usually variable, functio, or Class) exists but has't been assigned a value yet
//     -typeof true equals boolean
//     -typeof symbol

//     Boolean is a true or false value. Often reffered to as Truthy or Falsy

var thing3 = true;
var thing4 = false;

//do on thing
thing3 = false;
// else if9userLogin === false
    // do something else
    thing3 = true;
// }    


// Write some code that will split up a string into a clear string mane.
// For example 'Kaya,Solomon' get converted into 'Kaya, Solomon'.
// SOllution:
// console.log ('Kaya,Solomon'.split(','));


if(fullName.lenght > 20) {
    fullName = fullName.slice(0,20)
    console.log('hit')
}
// //this file is where I am creating my first github Repo
// //console.log() is used to print or (AKA log) information to the Commmand Line Interface (CLI)
//       //console.log("Hello world!")
 
// //A variable is a symbol that stands for another value
// var x = 2;
// console.log(1+x);

// // Javascript Data Types

// // 1. Strings
// // A set of characters surround by by qoutes " ", ' ', ` `
//  var name = 'Desmond';
//  console.log("My name is "+ name);

// // var singleQuote = 'single-quote';
// // var doubleQuote = "double-qoute";
// // var backticks =`backticks`;

// //back ticks can be used for more complicate stuff
// var multiplePeople =  `Desmond
// Geo
// Nat
// `
// //The following are template literals
// //console.log(`My name is ${name}`)
// // console.log(multiplePeople)

// // We can reference a single letter by its index
// var str = "Highness";
// console.log ('Index 2: ' + str[2]); //g
// str[0] = "h" // wont work
// console.log (str)
// //Strings are immutable, which means that they cannot be changed
// var newStr = "f" + str[1]; 
// var str2 = "Sleepy"
// console.log(str2[1] + str2[2] + str2[3])

// var alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet[13] + alphabet[8] + alphabet[2])
// console.log("Hi," + name + ' welcome to FB!');
// console.log(`Hi ${name}, welcome FB`);
// //a b c d e f g h i j k l m n o p q r s t u v w x y z

// // var str = "Jello"
// // str[0] = "J" // Hello -> Jello; // DOESNT WORK
// // var str2 = `J${str1[1] + str1[2] + str1[3] + str1[4]}`;
// // //Declare str1 and give it a value
// // var str1 = "Hello";
// //Goal is to change one letter of str1
// //we forget string are immutable and try to swap a letter, this doesn't work

// // console.log(str)
// // //Strings are immutable, which means that they cannot be changed (however, the variable can)
// // var sta ="Hello";
// // str = "Hello World!"; // we want new string to be "Hello World!"
// // cosole.log(str)

// //Getting string length & last character
// var str = "Hello";
// //Hello <- 5 Characters = length of 5, the o is at index
// var lengthOfStr = str.length;
// var lastStrChar = str[str.length-1]
// console.log(lastStrChar);




// a substring is any small portion of a string

// Get a specific substring, a substring is any small portion of a string
     // Create our fullName variable
    // var fullName = 'Desmond;Horsham-Brathwaite';
    var fullName = 'Desmond;Horsham-Brathwaite';
   // Look dor 'divider' index. AKA the index of ';'
   var divider = fullName.indexOf(';'); // a number
  // Slice fullName.slice(0, divider)
  var first = fullName.slice(0, divider);
  // Slice fullname into its last part starting the index of ';' untill the end ';'.
  // +1 is to account for inclusiveness
  var last = fullName.slice(divider + 1, fullName.length)
  console.log(first);
  console.log(last);

  console.log('HelloWorld;'.slice(2,7));
//Character doesn't exist
//Declare fullName and assight it a value
//var fullName - 'Desmond Horsham-Brathwaite'
// look fo the index od ';'
var divider = fullName.indexOf(';'); // a number
// Show the result
console.log(divider); //Pro
console.log(fullName.indexOf("h")) 


//Making a string lower case
    // var meme ="tHiS is a MEmE";
    // var smallMeme = meme.toLowerCase();
    // var bigMeme = meme.toUpperCase();
     
// console.log(meme)
// console.log(smallMeme)
// console.log(bigMeme);

// Example with no caps
// var fullName = 'desmond horsham-brathwaite';
// var divider = fullName.indexOf(' ');
// var fixedFirst = 'D' + fullName.slice(1, divider);
// var fixedLast = 'H' + fullName.slice(divider + 2, fullName.length);
// var fixedName = fixedFirst + ' ' + fixedLast;
// console.log(fixedName);
// ' '

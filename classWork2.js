// level 0
 // Q0.1 create a function that always greets us ( 'Hello', 'World', 'Function' )
function greeting2 (param){
       return (param)
}
console.log(greeting2('HelloWorld'))

// example:
// no input
// output: "Hello!"

// level 1:
// Q1.1 
// Create a function that takes in a string and returns the second character
function returnthesecondcharcarter(param){
       return param.slice(1,2)
}
console.log(returnthesecondcharcarter('What'))


// Q1.2
// Create a function that takes in an array and returns the second element
function returnsthesecondelement(param){
       return param.slice(1,2)
       // slice always requires two numbers
}
console.log(returnsthesecondelement([1,2,3,4]))
// Q1.3
// Create a function that takes in an array of birds and adds three birds
// the birds get added one to the front, one to the back, and one at the second index
// function birdsandaddsthreebirds(param){
//        // Add bird3 to the 2nd index 
//        param.splice( 2,0, 'Kingfisher')
//        // Add bird1 to the front
//        param.unshift('Quaker')
//        // Add bird2 to the back
//        param.push('Cockatoo')
      
//        return param
// }
// console.log(birdsandaddsthreebirds(['Bald Eagle', 'Robin', 'Blue Jay']))

// let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
// let bird1 = 'Quaker';
// let bird2 = 'Cockatoo';
// let bird3 = 'Kingfisher';

// Q1.4
// Create a function that takes in a string and gives us the first three letters
function firstLetters(str){
       let first3 = str.slice(0,3)
       return first3;
}

// function givesusthefirstthreeletters(param){
//        param.length('tomorrow')

// }

// Q1.5
// Create a function that takes in an array and combines the elements into a string
function arrTostr(array){
       return array.join('-')

}
// level 2:
// Q2.1
// Create a function that takes in a string and returns the last character

       function lastChar(str){
              return str[str.length - 1];
              
       }
       console.log(lastChar('Hello World'))
// Q2.2
// Create a function that takes in an array and returns the last element
function 
// level 3:
// Q3.1
// Create a function that takes in a string and returns the central character
// Q3.1
// Create a function that takes in an array and returns the central element

// level 4:
// Create a function that searches for all numbers inside strings in a given array and removes them 
// input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
// output = ['B', 'RTX', 'Hello World', 'HWD']
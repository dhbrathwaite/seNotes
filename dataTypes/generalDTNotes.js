// primative Data Types
        // All immutable, (re-assign the variable if you'd like to change it)
            // Example:
                // var str1 = 'Test'
                // str1 = str1.slice(1,3);
                // console.log(str1);
    // String
        // Characters surround by a set of quotes, either '',"", or ``
    // Boolean
        //True or False values. Can be called Truthy or Falsy. All data types hold Boolean values
    // Undefined
        // Something had been defined but hasn't been assigned a value.
        // var thing1 = null;
    //NUmber
        // Numbers are comprised of digits. JavaScript can perform mathmatical operations
    // Symbol
        // Unique identifiers that can be reused in code

import { strict } from "assert";

        
// Complex Data Types
    // Arrays
        // A list of items surrounded by square brackets
    // Objects
        // A unordered collection of key-values pairs.
        // Unordered collection of related data in key
        // var obj1 = {
        //     team: {
        //         player1:{
        //             attributes:{
        //                 Hair:'brown',
        //                 eyes:'brown',
        //                 height:'150cm'

        //             }
        //         }
        //     }
        // }
    // Function
        // A block of code designed to perform a particular task.
            // Syntax:
                // keyword, function name, paramter
                function firstPersonsName(names){
                    firstPerson = names[0];
                    // return ensures the function evalutes to a value
                    return firstPerson;
                }
                // define our variable which will be utilized as an argument
                // the arguement takes place of all occurences of the parameter
                var people = ['Debbie', 'Geo'];
                //      calling the function, and ivoking it with the people array.
                console.log(firstPersonName(people));
                // ^ logging it to the terminal
                var arg ="I am arguing"

                function test(paramter){

                    return "Welcome to Facebook"


                }

                var people = [ 'Debbie', 'Geo', ];

                console.log(firstPersonNames(people))

// Methods:
    // Strings
        // Length
            // gives us how many characters are in a the string
            // Syntax:
                // str.length
        // Slice
                // give us specific characters in between two indicies. Inclusive at the start and exclusive at the right
                // Syntax:
                    // ('Hello-World').split('-') // --> 'He'
        // Split
                // Turns a string into an array cut on a given character
                // Syntax:
                    // ('Hello-World').split('-') // --> ['Hello', 'World']
        // Replace
                // Replaces the first occurance a character with another character.
                // Syntax:
                    // ('Hello-World').replace('-', ' ') // --> 'Hello', 'World'
                    // ('Hello-World').replace('l', ' ') // --> 'Hello', 'World'
        // IndexOf
                // Gives you a the specific location of a character.
                // Syntax
                    // ('Hello-World').indexOf(o); --> 'o'
                    // Common example is to get something based 
                    (('Hello-World').indexOf('Hello-World'.length))                    
    // Arrays:
        // length 
            // Gives us how many elements are in the array
            // Syntax
                // arr.length                
        // push
            // Adds an element to the end of an array
            // Syntax:
                // var arr = ['Hello', 'World']
                //arr1.unshift('Great')
                // console.log(arr2) // --> ['World']       
        // shift                   
            // Removes the first element from an array
            // Syntax
                // var arr2 = ['Hello', 'World']  
                // arr2.shift()
                // console.log(arr3) // -->
 // loops
    // Definition:
         // Repeatedly executes a block of code until a certain condition is met.
    // Syntax:
        // for (var index = 0; index < number; index++){}
        // inside a function
                // function doALoop(parameter){
                    // for (var index = 0; index < number; index++){

                   //}
                   //return 
               // }
    // basic accumilator function               
         // definitiotn:
             // A commonly occuring block of code which has a variable outside a loop that we are adding 
             // Rememeber the warehouse/forklift example.
             // SYntax:
                // Number: 
                var highest = 10;
                function countEvenSum (numParam){
                    var accumilator1 = 0;

                    for(var i = 0; i < param; i++){
                        if(i % 2 ===0 ){
                            accumilator1 = accumilator1 + i; // accumilator1 += i
                        }
                    }

                    return accumilator1;
                }
                console.log(countEvenSum(highest));
            // Array:
               var names = ['Debbie Neal','Nat Martinez', 'Solomon West'];

               function lastNames(arrParam){
                   var lasts = [];

                   for(var i = 0; i < arrParam.length; i++){
                       // 'Debbie Neal'
                       var fullName = arrParam[i];
                       var space = fullName.indexOf(' ');
                       var last = fullName.slice(space + 1, fullName.length);
                       allLasts.push(last);
                   }
                   return lasts;
               }
               console.log(lastNames(names))
            // String:
               // every time we have the letter e our count will increase
               var sentence = 'The quick brown fox jumps over the lazy dog.';

               function allEs(strParam){
                   var numberOfEs = 0;

                   for(var i = 0; i < strParam.length; i++ )
                       // checking if our current letter is an e
                                             var letter = strParam[i];
                       if( letter === 'e' || letter === 'E'){
                           letter === 'a' || letter === 'A'
                           letter === 'i' || letter === 'I'
                           letter === 'o' || letter === 'O'
                           letter === 'u' || letter === 'U'
                           numberOfEs++;
                           } else {
                               console.log('not an e');
                           }
                            return numberOfEs;
               }
                console.log(allEs(sentence));
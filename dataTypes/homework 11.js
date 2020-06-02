// Q1:
// Write a function that takes in a string and turns it into an array based on where it has dashes

import { compilation } from "webpack";

// Input: var string = "Pizza-Pizza-Give-Me-All-The-Pizza!"
var pizzaStr = "Pizza-Pizza-Give-Me-All-The-Pizza!";
// Output: ["Pizza","Pizza","Give","Me","All","The","Pizza!"]
function stringToArray(str){
    // converts a string into an array
    var pizzaArr = Str.split('-');
    return pizzaArr;

    // The function will iterate through the array and remove and remove the dash
   
}
// Alternate solution

    //declare a function that takes in a string
        // loop over the string
            //if the character is a dash
                //remove the character and set a final string value
                // var finalString = "Pizza-Pizza-Give-Me-All-The-Pizza!"
console.log(pizzaArr);



//Q2:
// Write a function that takes in an array of strings and joins it all together without spaces
// Input: var arr = ["I","Can","Not","Wait","For", "Warm", "Weather!"]
// Output: "ICanNotWaitForWarmWeather!"
    var weather = ["I","Can","Not","Wait","For", "Warm", "Weather!"];
    //declare a function that takes in an array
    function noSpace(arr){
        // the function will join the array into a long string without any spaces
        var finalStr = arr.join(' ')
         return finalStr;
    }
    console.log(noSpace(weather));   
// Q3:
// Write a function that takes in a string and removes all of its dashes
// Input: var str = "I-Love-To-Code!"
// Output: "ILoveToCode!"
// Hint: this is the previous two questions combined
    //Take in a string turn it into an array based on the location of the dashes
    //We can then combine it back into a string without any dashes
    var codingStr = "I-Love-To-Code!"
    var pizzaString = "Pizza-Pizza-Give-Me-All-The-Pizza!"
// declare a function that takes in a string
function dashRemover(str){
    // convert the strig into an array based on its dashes
    var noDashesArr = str.split('-');

    return noDashesStr;
}    

console.log(dashRemover(codingStr));
// Pair programming loop practice

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. 
    // input: let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];
    // output: ['r', 'n', 'g', 'r'];

    let seasons = ['Winter', 'Fall', 'Spring', 'Summer']; //declaring a variable and setting it equal to an array of strings

    function allLastLetters(arrParam){
        let lastLetters = []; // declaring a variable and setting it to an empty array

        for(let i = 0; i < arrParam.length; i++){ // iterate over the parameter starting from zero 
            let currentSeason = arrParam[i]    // look at each element by itself and pull the last letter
            
            let endchr = currentSeason.slice(-1)
            lastLetters.push(endchr)
        }

        return lastLetters;
    }

    console.log(allLastLetters(seasons));

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.
// var arrParam1 = 'Winter'
// var arrParam2 = 'Autumnr'
// var arrParam3 = 'Spring'
// var arrParam4 = 'Summer'
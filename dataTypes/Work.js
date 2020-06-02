// Q1
// Only Using 
var arr = [0,1,2,3];
function getFrist(array) {
var FirstItem = array[0];
return FirstItem;
}
console.log(getFrist(arr));


// Q2:

    // Given a string remove every other letter
    var str = "Hello World";
    function removeEvryOther(string){
    var finalString = '';
    for(var i = 0; i < string.length; i++)
        var currentLetter = string[i];

    if(i  2 === 0){
        finalString = finalString + string[i];
    }

    }
    return finalString;

}   

    console.log(rmvfinalString)





// Q3:

    // Given a number minus 5 from it and divide it by 10

    function basicMath (n){
        var x = 5;
        var y = 10;
        return  n-5  / 10;
    }
 console.log(basicMath(25))
 console.log(basicMath(35))
 console.log(basicMath(20))
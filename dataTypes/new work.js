var fullText1 = "MAN67584758;Manchester Piccadilly"

var divider = fullText1.indexOf(';');
//Slice it on the semicolon

var computerText1 = fullText1.slice(0,divider);
//SLice on the semicolon to get the second half
var humanText = fullText1.slice(divider + 1, fullText1.length)
// Create a string of everything
var finalText = 'Text for computer: ${computerText}. Text for human ${humanText}';

console.log(finalText)
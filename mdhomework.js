// push - method adds one or more elements to the end of an array and returns the new length of the array.

// Adds a new element to the end of an array
// Data type it works on: array

const brands = ['samsung', 'lorex', 'nokia', 'lg', 'tplink'];

console.log(brands.indexOf('tplink'));
// expected output: 1

// start from index 2
console.log(brands.indexOf('tplink', 2));
// expected output: 4

console.log(brands.indexOf('sandisk'));
// expected output: -1
// slice -
    // string : returns the selected elements of a string
    // array : method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. 
The original array will not be modified.
// length - property of an object which is an instance of type Array sets or returns the number of elements in that array.
// replace - method returns a new string with some or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
// unshift - method adds one or more elements to the beginning of an array and returns the new length of the array.
// shift - method removes the first element from an array and returns that removed element. This method changes the length of the array.
// pop - method removes the last element from an array and returns that element. This method changes the length of the array. 
// join - method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator. 
// splice - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// toUpperCase() - method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
// toLowerCase() - method returns the calling string value converted to lower case, according to any locale-specific case mappings.
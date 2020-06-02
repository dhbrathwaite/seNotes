//  Declaring an object


var personObj = {
    name: 'Desmond',
    interests: ['Cooking', 'Computers', 'RL', 'Driving'], 
    age: 41,
};

// Accessing informantion in an object
// console.log(personObj.name);
// console.log(personObj.interests);
// console.log(personObj.age);

console.log(personObj ['name']);

// change Desmond to Des
// personObj.name = personObj.name.replace('Desmond', 'Des')
    personObj.name = 'Des';
    console.log(personObj);
// Adding a new key-value pair
    personObj.email = 'dhbrathwaite@aol.com';
    personObj.phoneType = 'samsung';
    console.log(personObj);
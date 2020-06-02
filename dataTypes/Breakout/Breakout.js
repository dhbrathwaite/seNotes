// Practice 1:
 // Task 1: Creating an object
 // Create an object called car
 // Give it 5 key value pairs including; color, numberOfWheels, and brand. 
 
 // Task 2: Changing Stuff
 // Using dot notation 
 // 2a: Change the color
 
 // Task 3: Adding Stuff
 // Add numberOfSeats
 // Add licensePlate
 // End of practice one
//______________________________________________________________________________________________________________
 
//Practice 2
 
 // Task 1:
 // Create 3 car objects with 3 properties; color, numberOfWheels, and brand. 
 // Task 2:
 // Iterate through the cars and do the following tasks
 // Change the color
 // Add numberOfSeats
 // Add licensePlate
 // (Difficult) Make each one unique

//  let cars = {
//     Color: "Silver",
//     numberOfWheels: "5",
//     rims: "TSW",  
//     brand: ["BMW", "Audi", "Lexus"],
//     radio: "Pioneer",
    
    
//  };
//  console.log(cars)

// console.log

class SmallestIntegerFinder {
   findSmallestInt(args) {
 //    return Math.min(...args)
 //    return args.sort(( a, b) => a - b);
 //   args is an array with a specified index of 0 not actually the smallest number
    var smallestNumber = args[0];
    // we're 
    for (var i = 0; i < args.length; i++) {
    
    if  ( args[i] < smallestNumber) {
    smallestNumber = args[i];
       }
    }
    return smallestNumber      
   }
   }
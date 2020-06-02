// Numbers
    function addition (param1,param2){
        return param1 + param2;
    } 
    // invoke a function
    //addition(2)
    // Invoke(regarding calling the function) a function and log it to the console.
    //console.log(addition(2, 6))

    function multiply (param1,param2){
        return param1 * param2;
    }
    // invoke a function and log to the console
    // console.log(multiply(7,8))

    function subtraction (param1,param2){
        return param1 - param2;
    }
    // invoke a function
    // console.log(subtraction(6,3))

    function division (param1, param2){
        return param1 / param2;
    }
    //invoke a function
    //console.log(division(10,5))

    function absValue (param1){
        return Math.abs(param1);
    }
    //invoke a function
    // console.log(absValue(-5))

    function sqrt (param1){
        return Math.sqrt(param1);
    }
    var num1 = 10;
    var num2 = 144;
    var num3 = 172;
    // The variables don't need to be declared before the declaration of the function
    // The variables do need to be declared before the invocation of the function
    // invoke and log sqrt
    // console.log(sqrt(num2))
    // console.log(sqrt(num1))
    // console.log(sqrt(num3))

// Strings

    // A string is anything defined between quotes(""), single qoutes(''), or backticks(``).
    // example
        // 'Hello World'
        //     // When you have single qoutes use double qoutes for the exterior
        // "don't"
        // // backticks(template Literals) are used when you like javascript inside your string
        // `don't`
            // example
                // var name = 'Desmond'
                // `Hello ${name}!`
                // 'Hello' + name + '!'
        // escaping a character
        // 'don\'t'
        // console.log(`Hello ${name}!`)
        // The following is a function will always tell us Hello World
        function greeting (param){
            return 'Hello World'
        }
        // console.log(greeting())

        // The following is a function which takes in a string and will greet a person using their name.
        var user1 = 'Kris';
        var user2 = 'Desmond';
        function meet (param){
            return 'Hello' + param;
        }
        console.log(meet(user1)) 
        console.log(meet(user2)) 
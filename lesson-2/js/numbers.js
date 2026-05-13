 /* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
       let para= document.querySelector("p");
        // Note - there are also different number systems: binary, octal, and hexadecimal
       let myInt = 1;
       let myFloat = 5.6789;
       let typeText = console.log(typeof(myFloat));
       //prefix binary is 0b
       let binNum = 0b1010; 
       console.log("binary number: " + binNum);
       // prefix octo number 0o
       let octoNum = 0o12;
       console.log("Octo number: " + octoNum);
       // prefix hexa numbers 0x
       let hexaNum = 0xD;
       console.log("Hexa Num: " + hexaNum);
        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
       let step2a = 5%3;
        para.textContent = step2a;

        // Try declaring and initializing a couple of variables as numbers
        

        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */
        let step3b = (90 + 60) *5 -25;
        console.log(step3b);

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
        //post increment
        let x = 5;
        let y = x++;
        console.log("y: " + y);
        console.log("x: " + x);

        //pre increment
        let a =4 ;
        let b = ++a;
        console.log("a: " + a);
        console.log("b: " + b);
        //Invalid 4++ or ++4

        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
       let step4a = 5;
       console.log(step4a /= 2);

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */


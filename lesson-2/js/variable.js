/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myCourse;
        let string;
        let para = document.querySelector('p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = "Naomi";
        myCourse = "Client-Side JavaScript";

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName = "Na";
        myCourse = "CSJ";
        string = myName + " " + myCourse;
        para.textContent = string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse =6;
        para.textContent = numCourse;
         console.log(typeof(numCourse));

		// Strings (use '' or "")
        let stringCourse = "Client-Side JS";
         para.textContent = stringCourse;

		// Booleans
        let isAmAlive = true;
        let compare = 5>2;
        para.textContent= isAmAlive;
        console.log("The result: " + isAmAlive)

		// Arrays
        let myArrays= ["Sara", "Naomi" ]
		
		// Objects
        let animal = {type:"Dog",
                      colour: "brown"
        }

		// STEP 5: Typing (JavaScript is a loosely-typed language)
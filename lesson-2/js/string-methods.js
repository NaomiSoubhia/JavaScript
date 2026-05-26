 var output = document.querySelector('p');
        
        /* STEP 1: String Length */
     let step1 = "This is a string";
     output.textContent = step1.length;

        /* STEP 2: Retrieving a Specific String Character */
        let step2 = "Donald J. Trump";
        let firstChar = step2[0];
        //Last caracter
        output.textContent = step2.length - 1;
        output.textContent = step2[step2.length - 1];

        /* STEP 3: Extracting Part of a String */
         // Note - if the substring is not found within the string, indexOf() returns -1
         let step3s = step2.indexOf("shi");
         output.textContent = step3s;

         output.textContent = step2.slice(5);


        // Note - if you don't specify where to end the slice, the method returns the rest of the string

        /* STEP 4: Changing Case */


        /* STEP 5: Updating Parts of a String */
     let trophyName = "The Memorial Cup";

let trophyName = trophyName.replace('Memorial', 'Stanley');

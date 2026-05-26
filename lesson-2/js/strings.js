    const output = document.querySelector('p');
    
    /* STEP 1: Creating Strings */
    let step1a = "This is 'a' string";
    
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
    let step2a = 'It\"s a six o\'clock '

    /* STEP 3: Concatenation */
    let step3a = "JS";
    let step3b = "rocks";
    output.textContent= step3a + " " + step3b;

    /* STEP 4: Numbers and Strings */

    // numbers can be converted to strings
    let step4a = "fahrenheit" + 345;
    console.log(typeof(step4a));

    // strings can be converted to numbers, too

    // and back again, if we want

const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    // variables/attributes
    size;
    isDecaf;

    // constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    // add a serveIt method
    serveIt() {
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>

        // Set the src path for the IMG element
        // <img src="images/coffee-cup.svg">
        if (this.isDecaf) {
            // Determine caffeine status of the coffee
            cup.setAttribute("src", "images/coffee-cup-green.svg"); // <img src="images/coffee-cup-green.svg">
        } else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg"); // <img src="images/coffee-cup-purple.svg">
        }

        // Set the size of the cup SVG image based on this.size
        // <img src="images/coffee-cup.svg" height=150>
        switch (this.size) {
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                cup.setAttribute("height", 100);
                break;
            case "medium":
                cup.setAttribute("height", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                break;
            default:
                cup.setAttribute("height", 150);
        }

        // console.log(cup);
        // Generate a description of the coffee and put it into the IMG title attribute
        cup.setAttribute("title", `A ${this.size} coffee.`);

        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let priyanshCoffee = new Coffee("medium", true);
priyanshCoffee.serveIt();

let robertCoffee = new Coffee("large", false);
robertCoffee.serveIt();

let meganCoffee = new Coffee("small", true);
meganCoffee.serveIt();
robertCoffee.serveIt();
meganCoffee.serveIt();
meganCoffee.serveIt();
meganCoffee.serveIt();
meganCoffee.serveIt();
meganCoffee.serveIt();

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }
    latteDesc() {
        return `A ${this.size} sized Latte with ${this.milkType} milk.`;
    }
}

/* STEP 6: Create a new instance of the Latte object */
let priyanshLatte = new Latte("small", false, "2%");

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG


//LAB - 200645137 NAOMI 

//Create a new subclass of Coffee named after a coffee drink of your choice (e.g. Cappuccino, Mocha, FlatWhite). Use the extends keyword to inherit from Coffee.

class Mocha extends Coffee {
//Add at least one unique property to your subclass beyond size and isDecaf (e.g. shots, flavour, foamLevel). Write a constructor that accepts all properties and uses super() to pass size and isDecaf up to the parent class.
    chocolateType;

    constructor(size, isDecaf, chocolateType) {
        super(size, isDecaf);
        this.chocolateType = chocolateType;
    }

    mochaDesc() {
       //Add a method to your subclass that builds and returns a description string of the drink, including all properties. For example: "A large Mocha with 2 shots and caramel syrup."
        return `A ${this.size} sized Mocha with ${this.chocolateType} chocolate.`;
    }

}



//Instantiate at least two objects from your new subclass with different values.

let naomiMocha = new Mocha("small", true, "milk");
let thiemiMocha = new Mocha("large", false, "dark");

//Call the serveIt() method (inherited from the parent Coffee class) on each of your objects and observe the output on the page.
naomiMocha.serveIt();
thiemiMocha.serveIt();

//Call your custom description method on each object and display the returned string on the page.

let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");

//Showing the returned value 
paragraph1.textContent = naomiMocha.mochaDesc();
paragraph2.textContent = thiemiMocha.mochaDesc();

//Appending the paragraphs
output.appendChild(paragraph1);
output.appendChild(paragraph2);

//Create a second subclass that extends your first subclass. Add another unique property and method, and confirm it still has access to serveIt() from the original Coffee grandparent class.
class IcedMocha extends Mocha {

}
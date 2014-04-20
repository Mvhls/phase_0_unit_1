// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Matthew Hein
//  2.Andy Principe


// 1. "YOU SIGNED... WHO?!"
var TomHanks = {
  name: "Tom Hanks",
  age: 55,
  quote: "WILSON!"
};



// 2. "Here they Come!"
var AdamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?"
};

var kristenBell = {
  name: Kristen Bell,
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var JimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "So you're telling me there's a chance? YEAH!"
};

// 3. "TIME IS MONEY!"

function client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

var clients = [];
function client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    clients.push(name, age, quote)
}



// ** BONUS **


//  Your Reflection:

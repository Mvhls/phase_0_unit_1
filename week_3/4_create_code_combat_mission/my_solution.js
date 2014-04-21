// I worked by myself and [with: Drew Teter] on this challenge

// Your mission description:
// Rescue the princess from the ogre.
// Write commands to defeat the ogre and untie the princess.

// Pseudocode
// object character(x, y, z, health) {
// has health
// has x coordinate
// has y coordinate
// has z attack
// }
//
// object hero {
// inherits from charater
// }
//
// object princess {
// inherits from charater
// tied = true
// }
//
// object ogre {
// inherits from charater
// }
//
// function attack(target) {
// get hero coordinates
// get ogre coordinate
// if abs(hero coordinate - ogre coordinate) < 1
// while hero or ogre health > 0 {
// ogre health -= hero attack
// hero health -= ogre attack
// }
// win_lose()
// }
//
// function move(x, y) {
// character y coordinate = y
// character x coordinate = x 
// }
//
// function untie(target){
// get hero coordinates
// get target coordinate
// if abs(hero coordinate - target coordinate) < 1
// if target is tied
//    untie target
// win_lose()
//}
// function win_lose(){
// if hero health <= 0
//  displpays You loose!
// if princess is untied
// display you win

// Initial Code
var character = {
  health = 100;
  x = 0;
  y = 0;
  attack = 25;
}

var hero = new character(x: 50);
var ogre = new character(health: 50, x: 50, y: 50);
var princess = new princess(x:50, y:100);
princess.tied = true;

var attack = function(target) {
  if (Math.abs(this.x - target.x) < 1 && Math.abs(this.y - target.y) < 1 {
    while (target.health > 0 && this.health > 0) {
      target.health -= this.attack;
      this.health -= target.attack;
      console.log("You have ".concat(hero.health, "health."));
      console.log("The ogre has ".concat(ogre.health, "health."));
    }
    win_lose();
  }
  else {
    console.log("You're too far away!");
  }
}

var move = function(x, y) {
  this.x = x;
  this.y = y;
}

var untie = function(target) {
  if (Math.abs(this.x - target.x) < 1 && Math.abs(this.y - target.y) < 1 {
    if(target.tied === true) {
      target.tied = false;
    } 
    win_lose();
  }
  else {
    console.log("You're too far away!");
  }
}

var win_lose = function() {
  if hero.health <= 0 {
    console.log("You Lose!");
  }
  if princess.tied === false {
    console.log("I'm sorry... Your princess is in anothorth castle...");
  }
}





// Refactored Code
var character = {
  health = 100;
  x = 0;
  y = 0;
  attack = 25;
}
var hero = new character(x: 50);
var ogre = new character(health: 50, x: 50, y: 50);
var princess = new character(x:50, y:100);
princess.tied = true;

var attack = function(target) {
  if (Math.abs(this.x - target.x) < 1 && Math.abs(this.y - target.y) < 1 {
    while (target.health > 0 && this.health > 0) {
      target.health -= this.attack;
      this.health -= target.attack;
      console.log("You have ".concat(hero.health, "health."));
      console.log("The ogre has ".concat(ogre.health, "health."));
    }
    win_lose();
  }
  else {
    console.log("You're too far away!");
  }
}

var move = function(x, y) {
  this.x = x;
  this.y = y;
}

var untie = function(target) {
  if (Math.abs(this.x - target.x) < 1 && Math.abs(this.y - target.y) < 1 {
    if(target.tied === true) {
      target.tied = false;
    } 
    win_lose();
  }
  else {
    console.log("You're too far away!");
  }
}

var win_lose = function() {
  if hero.health <= 0 {
    console.log("You Lose!");
  }
  if princess.tied === false {
    console.log("I'm sorry... Your princess is in anothorth castle...");
  }
}





// Reflection
/*
I worked on this challenge with another person using stypi. I am glad that I did, because I attempted this 
challenge before finishing the other exercises. During the challenge, I was the initial driver when writing
the pseudo code, and then switched to navigator during the code writing and refactoring. I was confused at
first when trying to understand how to make my own code combat mission, but it became more clear when taking 
it step by step. The mission that we built was pretty simple, and it was interesting to see how complicated 
it could be for such an easy mission. I am not as confident with this mission as much as I am with other missions,
but I understand the basic idea of creating the base for this program to run. I imagine this will be important for
future programs in javascript and even ruby. 
*/

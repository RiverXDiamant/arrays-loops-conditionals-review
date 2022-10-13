// * Part II: JavaScript Reps

// * ===== Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i < 20; i++) {
  //   console.log(i);
}

// * ===== Write a for loop that will log only the even numbers in 0 through 200.

for (i = 0; i <= 200; i += 2) {
  //   console.log(i);
}

// * ===== Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

//*  Write a javascript application that logs all numbers from 1 - 100.
// * If a number is divisible by 3 log "Fizz" instead of the number.
// * If a number is divisible by 5 log "Buzz" instead of the number.
// * If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}

// * ===== Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
// * 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// * 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// * 3. Give D'Art a second hometown by adding "Hawkins"
// * 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);
console.log(dart);
console.log(plantee);
console.log(wolfy);

// * Yell at the Ninja Turtles
// * Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// * Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

// let pizzTime = ["Donatello", "Leonardo", "Raphael", "Michealangelo"];

// pizzTime = pizzTime.map(function (x) {
//   return x.toUpperCase();
// });

// for (let item of pizzTime) {
//   item.toUpperCase();
// }

let pizzaTime = ["Donatello", "Leonardo", "Raphael", "Michealangelo"];

let newPizzaArr = [];

for (let item of pizzaTime) {
  const value = item.toUpperCase();
  newPizzaArr.push(value);
}

console.log(newPizzaArr);

// * ===== Methods, Revisited =====
// * Here is a list of favMovies:

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
// * 1. Console log: the index of Titanic

console.log(favMovies[8]);

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like
// *    2.  use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
console.log(favMovies.sort()); // .sort() put everything in alphabetical order

// * 3. Use the method pop
console.log(favMovies.pop());
// * 4. push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
favMovies.push("Hellraiser");
// * 5. Reverse the array
console.log(favMovies.reverse());
// * 6. Use the shiftmethod
console.log(favMovies.shift());
// * 7. unshift- what does it return?
console.log(favMovies.unshift()); // it returned a number 18
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// * 8. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.splice(14, 1, "Avatar");
console.log(favMovies);
// * 9. slice the last half of the array (challenge yourself and try to programmatically determine the middle of the array rather than counting it and hard coding it)
// *- Thought question: did this permanently alter our array?
// * 10. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// * console.log your final results

const half = Math.ceil(favMovies.length / 2);
const favFirsthalf = favMovies.slice(0, half);
console.log(favFirsthalf);

const faveSecondhalf = favMovies.slice(half);
console.log(faveSecondhalf);

// * 11 After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and the Furious")); // output: undefined
// *Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// No so we don't accidentally redeclare the variable
// * ===== Where's Waldo

// * Where is Waldo
// * With the following multi-dimensional array
// *Remove Eggbert (hint look at the slice/splice method(s))
// * Change "Neff" to "No One"
// Access and console.log "Waldo"

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

whereIsWaldo[2].splice(2, 1, "Neff");

// * ===== Excited Kitten
// * Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// * For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let petMe = "Love me, pet me! HSSSSSS!";

for (let i = 0; i <= 20; i++) {}

// * ===== Find the Median
// * Find the median number in the following nums array, then console.log that number.
// * hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];

// Expected output:
// => 15

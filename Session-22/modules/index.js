console.log("JS Modules is running");

import karesi, {
  WHW as W,
  WORKING_HOURS_WEEK,
  dec,
  inc,
  sum,
  counter,
} from "./mymodule.js";

// console.log("W :>> ", W);

inc(4);
inc(6);
dec();
console.log("dec() :>>", dec());

console.log("counter :>>", counter);
counter = 29;
inc();
console.log("counter :>>", counter);

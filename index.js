
// Assume cats array is defined somewhere in your code
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array based on current cats array
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  // Create a new array with name prepended to current cats array
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  // Create a new array excluding the last cat
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  // Create a new array excluding the first cat
  const newCats = cats.slice(1);
  return newCats;
}



  


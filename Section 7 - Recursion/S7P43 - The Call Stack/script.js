// Call stack:
// wakeUp
// wakeUp -> takeShower
// wakeUp
// wakeUp -> eatBreakFast
// wakeUp -> eatBreakFast -> cookFood
// wakeUp -> eatBreakFast
// wakeUp

function takeShower() {
  return "Showering!";
}

// Invoke eatFood(), store the returned value as meal and return a string contains the meal's value.
function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

// Pick a random item and return it.
function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

// Inside the function, invoke takeShower() first, then invoke eatBreakfast().
function wakeUp() {
  console.log(takeShower());
  console.log(eatBreakfast());
  console.log("Ok ready to go to work!");
}

// Invokes wakeUp().
wakeUp();

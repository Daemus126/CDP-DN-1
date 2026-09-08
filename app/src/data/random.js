
export const RandomNumber = ( num, max) =>{

  console.log("max", max)
// Function to get a random number up to a max value
console.log("Begin")


function getRandomInt(count, min, loop_max) {
  console.log("func start");
  // 1: Create a `Set` object
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    // 2: Generate each random number
    uniqueNumbers.add(Math.floor(Math.random() * (loop_max - min + 1)) + min);
    console.log("in loop");
  }
  // 3: Immediately insert them numbers into the Set...
 return uniqueNumbers;


}

// Generate an array of 5 random numbers between 1 and 12

let uniqueArray = Array.from( getRandomInt(num, 1, max-1));
console.log(uniqueArray)
return uniqueArray;


}
export default RandomNumber;



export const RandomNumber = (num, max) =>{
// Function to get a random number up to a max value
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of 5 random numbers between 1 and 100
let n = 5;
let randomArray = Array.from({ length: n }, () => getRandomInt(1, 12));

return randomArray;


}

export default RandomNumber;

/*
exportt const getRaandoms = (num  max) => {
    iif((num > max))} || num < 1) 
    let Randm = []
    for */
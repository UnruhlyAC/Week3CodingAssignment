//Remember to comment A LOT
// Step 1
const ages = [3,9,23,64,2,8,28,93]; //create an array called ages
   //subtract the value of the first element from the last element
console.log(ages[ages.length-1]-ages[0]);
  //add a new age to the array
ages.push(5);
  console.log(ages)
// use a loop to iterate through the array and calculate the average ages
var sum = 0;
for(i=0;i < (ages.length); i++){
  sum +=ages[i];
}
console.log(sum/(ages.length));

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];// create an array called names

  //use a loop to iterate through and calculate average number of letters
var sum1= 0;
for(i=0;i < (names.length); i++){
  sum1 +=names[i];
}

let lengths = names.map(function(element){
  return element.length;
}
let sum = lengths.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});
console.log(sum);
  //use a loop to iterate and concatenate all the customerNames

  // how do you access the last element of an array?
//    array[length - 1]
  // how do you access the first element of an array?
      //  array[0]


//problem 7
 function echo(word,n){
   return word * n;
 }

  //problem 8
  function fullName(firstName, lastName){
    console.log(firstName + " " + lastName;)
  }

  //problem 9

  //problem 10 can use array for 9

  // problem 11 compare array averages

  //problem 12
function willBuyDrink(isHotOutside, moneyInPocket){
  return (isHotOutside && moneyInPocket > 10.50)
}

// problem 13, make your own

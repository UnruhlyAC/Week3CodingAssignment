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

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// create an array called names
  //use a loop to iterate through and calculate average number of letters
var sum1 = 0;
for(var i=0;i < names.length; i++){
  sum1 += names[i].length;
} console.log (sum1/names.length);

  //use a loop to iterate and concatenate all the customerNames
var con = names[0];
for(var i = 1; i < names.length; i ++){
  con =con.concat(" ", names[i]);
}  console.log(con);

  // how do you access the last element of an array?
//    array[length - 1]
  // how do you access the first element of an array?
      //  array[0]

//problem 7
var word = 'Hello'
var n = 3
    console.log(word.repeat(n));


  //problem 8
  var firstName = 'Davey'
  var lastName = 'Jones'
  function fullName(a, b){
    console.log(firstName + " " + lastName);
  }
  fullName(firstName, lastName);

  //problem 9 returns true if sum > 100
  arry1 = [1, 5, 19, 23, 38, 42, 54]


  //problem 10 can use array for 9 returns average value for array
function calculateAverage(array){
  var total = 0;
  var count = 0;
  array.forEach(function(item, index){
    total += item;
    count++;
  });
  return total/count;
} console.log(calculateAverage(arry1));

  // problem 11 compare array averages return true if first array is larger than 2nd
arry2 = [2,6,14,21,39,43,57]
if (calculateAverage(arry1)> calculateAverage(arry2)){
  console.log(true)
} else {
  console.log(false)
}
  //problem 12
  var isHotOutside = true
  var moneyInPocket = 11.45
function willBuyDrink(i,j){
  if(isHotOutside && moneyInPocket > 10.50){
    console.log(true)
  }else {
    console.log(false)
  };
}


// problem 13, make your own

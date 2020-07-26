const amounts = [61.00, 52.25, 112.99,  ,5.00];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log('Order total is: ', total);

// here's the same thing as above but with a for..of loop

for (let amount of amounts) {
  console.log(amount);
  total += amount;
}
console.log('Order total is: ', total); 


amounts.forEach(num => {
  
  total += num;});

//functions exercises
console.log("CHAPTER 3 UDACITY: FUNCTIONS");

function findAverage(x,y) {
  var avg = (x + y) / 2;
  return avg;
}

var avg = findAverage(5, 9);
console.log(avg);

console.log("SHADOWING BUG EXAMPLE!!!*****************");

let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
  let  bookTitle = "The Little Prince";
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);

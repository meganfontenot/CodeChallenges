function primeReduction(a, b) {
  function isPrime(num) {
    if (num <= 2) return false;
    let prime = true;
    let token = Math.ceil(Math.sqrt(num));

    while (token > 1) {
      if (Number.isInteger(num / token)) {
        prime = false;
        break;
      }
      token--;
    }

    return prime;
  }

  let seen = [];
  let counter = 0;

  function reducer(num) {
    let holder = 0;
    while (num > 0) {
      let digit = num % 10;
      holder += Math.pow(digit, 2);
      num -= num % 10;
      num /= 10;
    }
    if (holder === 1) {
      counter++;
      return;
    }
    if (seen.indexOf(holder) > -1) return;
    if (seen.indexOf(holder) === -1) {
      seen.push(holder);
      reducer(holder);
    }
  }

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      reducer(i);
      seen = [];
    }
    console.log('\n\n');
  }

  return counter;
}

primeReduction(8, 125);

// in: 2 integers (which represent a range of numbers)
// out: integer
// build a function that checks if the number is prime
// make an array to store data
// create another function that will reduce values along the chain
// ^ until we hit 1

// use a for loop that runs through the range
//   check if the number is prime
//   reduce through the fancy chain property
//     increment a counter
// return the value of that counter

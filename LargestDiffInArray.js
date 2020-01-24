// Define a function largestDifference that takes an array, and returns the highest difference from left to right.

// For example, [10, 7, 5, 8, 11, 9] the largestDifference is 6, from 5 to 11.

// Given an array of numbers that don't return a positive number, such as [100, 90, 80, 50, 10] return 0. 

function largestDifference(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let a = i + 1; a < arr.length; a++) {
        if ((arr[a]-arr[i]) > largest) {
          largest = arr[a]-arr[i];
        }
      }
    }
    return largest;
  }
  
  largestDifference(100, 90, 80, 50, 10);
  
  //  SOLUTION 

function largestDifference(arr) {
    let low = arr[0]; // 10
    let high = arr[1] - low; // -3
    
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i]; // 10
      let potential = current - low; // 10 - 10 = 0
      low = Math.min(current, low); // 10 - 0
      high = Math.max(potential, high); // 0, -3
    }
    return high;
  }
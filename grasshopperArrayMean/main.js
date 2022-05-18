// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

let findAverage = function (nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length
   
   }
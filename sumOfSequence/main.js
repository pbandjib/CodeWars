// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)
// This is the first kata in the series:


const sequenceSum = (begin, end, step) => {
    let sum = 0
    
    if(begin > end){
      return 0
    }else{
      for(let i = begin; i <= end; i = i + step){
        sum = sum + i
      }
      return sum
    } 
  };

//Sample Test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12)
    assert.strictEqual(sequenceSum(1, 5, 1), 15)
    assert.strictEqual(sequenceSum(1, 5, 3), 5)  
  })
})
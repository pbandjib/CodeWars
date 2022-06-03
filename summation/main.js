// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

let summation = function (num) {
    let sum = 0;
    for(var i=0; i<=num;i++){
      sum+=i
    }
    return sum;
  }

//sammple test

  describe('summation', function () {
    it('should return the correct total', function () {
      Test.assertEquals(summation(1), 1)
      Test.assertEquals(summation(8), 36)
    })
  })
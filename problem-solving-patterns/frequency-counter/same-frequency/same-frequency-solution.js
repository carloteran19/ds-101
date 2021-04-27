// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities
// Time: O(N)
// Sample Input: 

function sameFrequency(int1, int2){
    let numbers1 = int1.toString().split(''); 
    let numbers2 = int2.toString().split('');  
  
    if(numbers1.length !== numbers2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of numbers1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of numbers2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
      if(!key in frequencyCounter2){
          return false;
      }
      if(frequencyCounter2[key] !== frequencyCounter1[key]){
          return false;
      }
    }
    return true;
  }
  
  sameFrequency(182, 281) // true
  sameFrequency(34, 14) //false
  sameFrequency(3589578, 5879385) //true
  sameFrequency(22,  222) //false
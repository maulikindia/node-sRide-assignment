

//    Swork sort task - Problem Statement - 2

/*
    Assumptions:- 
             1.Loop of i will be iterate upto the less than or equals length of input list 
             2.For the different input list - we need to manually change into the "input" variable to assign new input list for the testing  
*/

const input = [7, 6, 5, 4, 3, 2, 1]
const inputLength = input.length
input.pop();
const reversedArray = input.reverse();

let totalCost = 0;
for (let i = 1; i <= inputLength - 1; i++) {
    let lengthOfJthElement = i - 1
    const j = reversedArray[lengthOfJthElement]
    const costPerIteration = j - i + 1
    totalCost = totalCost + costPerIteration
}

console.log("totalCost of for input list is\n",totalCost)
function sumOfTwoLargestIntegers(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain more than 1 integer");
  }

  // Step 1: Sort the array in descending order
  const sortedArray = arr.sort((a, b) => b - a);
  // step 2: take out the first element and the second element which are the two largest elements in the array
  const largestInt = sortedArray[0];
  const secondLargest = sortedArray[1];
  // Step 3: Add the two elements
  const sum = largestInt + secondLargest;
  // returns the first element, the second element, and the sum of the two elements
  return { largestInt, secondLargest, sum };
}

const arr = [1, 2, 5, 4, 6, 8, 7, 9];
const arr2 = [10, 14, 15, 8, 7, 9];

const resultArr = sumOfTwoLargestIntegers(arr);
const resultArr2 = sumOfTwoLargestIntegers(arr2);

console.log("For arr:");
console.log(
  "2 largest integers are",
  resultArr.largestInt,
  resultArr.secondLargest
);
console.log("Sum of 2 largest integers is", resultArr.sum);

console.log("For arr2:");
console.log(
  "2 largest integers are",
  resultArr2.largestInt,
  resultArr2.secondLargest
);
console.log("Sum of 2 largest integers is", resultArr2.sum);
// Run the code on JSFiddle

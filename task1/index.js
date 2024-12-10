function findMostFrequentLengths(strings) {
  // Step 1: Create a map to store the frequency of each string length
  const lengthFrequency = {};

  // Step 2: Calculate frequencies
  strings.forEach((str) => {
    const length = str.length;
    lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
  });

  // Step 3: Determine the maximum frequency
  const maxFrequency = Math.max(...Object.values(lengthFrequency));

  // Step 4: Identify the lengths with the maximum frequency
  const mostFrequentLengths = Object.keys(lengthFrequency)
    .filter((length) => lengthFrequency[length] === maxFrequency)
    .map(Number);

  // Step 5: Filter strings that match the most frequent lengths
  const result = strings.filter((str) =>
    mostFrequentLengths.includes(str.length)
  );

  return result;
}

console.log(
  findMostFrequentLengths(["a", "ab", "abc", "cd", "def", "gh", "ghth"])
);
console.log(findMostFrequentLengths(["Nam", "Hieu", "ha", "dung", "thanh"]));

// Run the code on JSFiddle

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge (input) {
  let a = 10 // O(1) - Some dispute whether it is appropriate to count an assignment for the purposes of measuring Big O.
  // For the purposes of this repo, all steps will be assessed.
  a = 50 + 3 // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n) - The `n` is the input, reflecting how big the input is or the length of the input.
    // Loops are measured as Linear and O(n) because the number of operations is constant and unchanging based on the input.
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }
  return a // // O(1)
}

// Total the above operations:
// = 3 + n + n + n + n
// = 3 + 4n
// Big O(3 + 4n)
  // Ultimately this will be reduced down to Big O(n)

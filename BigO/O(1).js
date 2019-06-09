// Big O - O(n) - Constant Time

// Initial Example

function compressFirstBox (boxes) {
  console.log(boxes[0]) // Always grabbing one item from the array, regardless of the number of elements within the array.
  //   document.write(compressFistBox('Same'))
}

compressFirstBox('Same')

// 
const boxes = [0,1,2,3,4,5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
  // Each time this function runs two operations or O(2).
  // O(2) is rounded down to O(1)because the number of operations are always constant and will run the same. 
}

logFirstTwoBoxes(boxes)

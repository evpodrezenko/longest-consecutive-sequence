module.exports = function longestConsecutiveLength(array) {
  let sortedArray = array.sort((a, b) => a - b);
  return find(sortedArray);
}

function find(array) {
  let maxLength = 0;
  let length = 1;
  const arrLength = array.length;
 
  if (arrLength < 2) {
    return arrLength;
  }

  for (let i = 1; i < arrLength; i++) {
    const step = array[i] - array[i - 1];
    if (step === 1) {
      length++;
    } else if (step > 1) {
      if (length > maxLength) {
        maxLength = length;
      }
      length = 1;
    }
  }
  return maxLength;
}
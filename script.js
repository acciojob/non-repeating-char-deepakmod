function firstNonRepeatedChar(str) {
    // convert string to an array of characters
    const arr = str.split("");
    // iterate over each character in the array
    for (let i = 0; i < arr.length; i++) {
      // check if the character appears only once in the array
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        // if so, return the character
        return arr[i];
      }
    }
  
    // if no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string:");
const result = firstNonRepeatedChar(input);
alert(result);
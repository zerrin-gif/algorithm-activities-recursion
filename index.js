/** Given an array of numbers where each number is repeated at least once and one number
 * is not
 * The goal of the function is to find non-repeating number.
 * Ex: [1,1,2,2,3,3,4,4,5,6,6]
 * Ans: 5
 * 
 * Ex: [3,6,6,7,7,9,9]
 * Ans: 3
 */
​
const findNonRepeatingnumber = arr => {
  for(let i=1; i < arr.length; i+=2) {
    if(arr[i-1] !== arr[i]) {  // (O(1) + O(2)) * O(n/2) 
      return arr[i-1];
    }
  }
 // 3 * O(n / 2) ~ O(n)
}
​
console.log(findNonRepeatingnumber([1,1,2,2,3,3,4,4,5,6,6]));
​
​
// 2nd way:
let arr = [1,1,2,2,3,3,4,4,5,6,6];
let result = arr.filter((v, i) => {     // O(n)
  arr.indexOf(v) === arr.lastIndexOf(v) // O(n) + O(n)
})
​
// O(n) * (2 * O(n)) = O(n^2)
console.log(result);
​
//-------------------------------
/** Determine if a given string is a palindrome.
 * Palindrome is a string which is equal to its reversed version.
 */
​
const isPalindrome = (word = "") => {
  let reverse = word.split('').reverse().join('');
  // O(n) + O(n) + O(n)
  return reverse === word;  // O(1)
}
​
// 3 * O(n) ~ O(n)
​
console.log(isPalindrome("kayak"));   // true
console.log(isPalindrome("aabcbaa")); // true
​
​
// 2nd way:
const isPalindrome2 = (word = "") => {
  let i = 0;   // O(1)
  const len = word.length; // O(1)
  const mid = Math.floor(len / 2); // O(1)
​
  while(i < mid) {   // O(1)
    if(word[i] !== word[len - i - 1]) { // O(1)
      return false;
    }
    i++; // O(1)
  } // O (n / 2) 
  return true;
}
​
// 3 * O(1) + O(n / 2) ~ O(n)
​
console.log(isPalindrome2("kayak"));   // true
console.log(isPalindrome2("aabcbaa")); // true
console.log(isPalindrome2("jdskgfj")); // false
​
​
​
// -------------------------------------------------
/** Write a function to return an array of sum of numbers for each number before that
 * Ex: 5
 * Ans: 1 + 2 + 3 + 4 + 5 = 15
 */
​
const printSumOfNumberForEachNumber = num => {
  const result = [];  // O(1)
  let sum = 0;  // O(1)
  for(let i=1; i<=num; i++) {  // O(2)
    sum += i; // O(1)
    result.push(sum) // O(1)
  } // O(n)
  return result;
}
​
// O(n)
console.log(printSumOfNumberForEachNumber(5));
​
​
// 2nd way:
const printSumOfNumberForEachNumber2 = num => {
  const result = [];   // O(1)
  
  for(let i=1; i<=num; i++) {  // O(n)
    let sum = 0;  // O(1)
    for(let j=1; j<=i; j++) {
      sum += j;   // O(i)
    }
    result.push(sum)
  }
  return result;
}
​
// O(n) * O(n)  ~ O(n^2)
console.log(printSumOfNumberForEachNumber2(5));
​
​
​
// ==================================
// RECURSION:
/** Write a function to return an array of sum of numbers for each number before that
 * Ex: 5
 * Ans: 1 + 2 + 3 + 4 + 5 = 15
 */
const sumOfNumbersForEachNumber = num => {
  // Base case 
  if(num === 1) {
    return [1];
  }
​
  const ans = sumOfNumbersForEachNumber(num - 1);  // [1]
​
  ans.push(ans[ans.length - 1] + num);  // 1 + num
​
  return ans;
}
​
// O(n) -> Because we are calling the same function n time
console.log(sumOfNumbersForEachNumber(5)); // [1, 3, 6, 10, 15]
​
​
// -------------------------------
/** Calculate the factorial of a given number 
 * Ex: 3
 * Ans: 1 * 2 * 3 = 6
*/
const calculateFactorial = num => {
  // Base case 
  if(num === 1) {
    return 1;
  }
​
  const ans = calculateFactorial(num - 1);  // 1
​
  return ans * num;
}
​
console.log(calculateFactorial(3));  // 6
console.log(calculateFactorial(5));  // 120
​
​
​
// ------------------------------
const printEvenNumbers = num => {
  if(num === 1) {
    return num;
  }
​
  if(num % 2 === 0) {
    console.log(num);
  }
​
  printEvenNumbers(num - 1);
}
​
printEvenNumbers(5);  // 4, 2
printEvenNumbers(10);  // 10, 8, 6, 4, 2
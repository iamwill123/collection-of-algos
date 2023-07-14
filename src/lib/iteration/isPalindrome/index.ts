// The time complexity of this function is O(n/2), which simplifies to O(n), where n is the length of the string. The space complexity is O(1), because no extra space is used that scales with the input size.

const isPalindrome = (str: string, n: number = str.length) => {
  // n / 2 so we don't need to check the entire string just half
  for (let i = 0; i < n / 2; i++) {
    let firstChar = str[i];
    let lastChar = str[n - 1 - i];
    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;

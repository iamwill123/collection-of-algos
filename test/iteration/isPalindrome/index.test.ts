import isPalindrome from '../../../src/lib/iteration/isPalindrome/index';

describe('isPalindrome', () => {
  it('should return true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for a string with one character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return true for a string with two characters', () => {
    expect(isPalindrome('aa')).toBe(true);
  });
});

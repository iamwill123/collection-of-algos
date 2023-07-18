import generateAllBinaryStringsOfLenN from '../../../../src/lib/recursion/combinations/generateAllBinaryStringsOfLenN/index';

const testCases = [
  {
    n: 3,
    expected: ['000', '001', '010', '011', '100', '101', '110', '111'],
  },
  {
    n: 4,
    expected: [
      '0000',
      '0001',
      '0010',
      '0011',
      '0100',
      '0101',
      '0110',
      '0111',
      '1000',
      '1001',
      '1010',
      '1011',
      '1100',
      '1101',
      '1110',
      '1111',
    ],
  },
  {
    n: 5,
    expected: [
      '00000',
      '00001',
      '00010',
      '00011',
      '00100',
      '00101',
      '00110',
      '00111',
      '01000',
      '01001',
      '01010',
      '01011',
      '01100',
      '01101',
      '01110',
      '01111',
      '10000',
      '10001',
      '10010',
      '10011',
      '10100',
      '10101',
      '10110',
      '10111',
      '11000',
      '11001',
      '11010',
      '11011',
      '11100',
      '11101',
      '11110',
      '11111',
    ],
  },
];

describe('generateAllBinaryStringsOfLenN', () => {
  test.each(testCases)(
    `should generate the correct string combinations for n = $n`,
    ({ n, expected }) => {
      const actual = generateAllBinaryStringsOfLenN(n);
      expect(actual).toEqual(expected);
    },
  );
});

import tower_of_hanoi from '../../../src/lib/recursion/towerOfHanoi/index';

describe('tower_of_hanoi', () => {
  test('should return the steps to move 3 disks from the first tower to the last tower', () => {
    expect(tower_of_hanoi(3)).toEqual([
      [1, 3],
      [1, 2],
      [3, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [1, 3],
    ]);
  });

  test('should return the steps to move 4 disks from the first tower to the last tower', () => {
    expect(tower_of_hanoi(4)).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2],
      [3, 1],
      [3, 2],
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 1],
      [3, 1],
      [2, 3],
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });
});

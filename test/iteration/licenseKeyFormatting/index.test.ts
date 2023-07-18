import licenseKeyFormatting from '../../../src/lib/iteration/licenseKeyFormatting';

describe('licenseKeyFormatting', () => {
  it('should return a string', () => {
    const s = '5F3Z-2e-9-w';
    const k = 4;
    const result = licenseKeyFormatting(s, k);
    expect(result).toBe('5F3Z-2E9W');
  });

  it('should return a string', () => {
    const s = '2-5g-3-J';
    const k = 2;
    const result = licenseKeyFormatting(s, k);
    expect(result).toBe('2-5G-3J');
  });

  it('should return a string', () => {
    const s = '2-5g-3-J-d-9';
    const k = 2;
    const result = licenseKeyFormatting(s, k);
    expect(result).toBe('2-5G-3J-D9');
  });
});

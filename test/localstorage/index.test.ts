import myLocalStorage from '../../src/lib/localstorage/index';

const {
  get: getLocalStorageData,
  set: setLocalStorageData,
  remove: removeLocalStorageData,
} = myLocalStorage;

// Mock the localStorage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key(i: number) {
      const keys = Object.keys(store);
      return keys[i] || null;
    },
  };
})();

global.localStorage = localStorageMock;

describe('getLocalStorageData', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    localStorage.clear();
  });

  it('should return null if no data is found', () => {
    expect(
      getLocalStorageData('nonexistentKey', 'nonexistentSubKey'),
    ).toBeNull();
  });

  it('should return the correct data when it exists', () => {
    const key = 'testKey';
    const subKey = 'testSubKey';
    const testData = { name: 'Test' };
    setLocalStorageData(key, subKey, testData);
    expect(getLocalStorageData(key, subKey)).toEqual(testData);
  });

  it('should remove the entire key from localStorage when no subKey is provided', () => {
    const key = 'testKey';
    const subKey = 'testSubKey';
    const testData = { name: 'Test' };
    setLocalStorageData(key, subKey, testData);
    removeLocalStorageData(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  it('should remove only the subKey from the key when a subKey is provided', () => {
    const key = 'testKey';
    const subKey1 = 'testSubKey1';
    const subKey2 = 'testSubKey2';
    const testData1 = { name: 'Test1' };
    const testData2 = { name: 'Test2' };
    setLocalStorageData(key, subKey1, testData1);
    setLocalStorageData(key, subKey2, testData2);
    removeLocalStorageData(key, subKey1);
    const remainingData = JSON.parse(localStorage.getItem(key) as string);
    expect(remainingData[subKey1]).toBeUndefined();
    expect(remainingData[subKey2]).toEqual(testData2);
  });
});

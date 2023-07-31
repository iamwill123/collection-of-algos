/**
 * Util for localStorage.ts
 */

/**
 * Fetch data from localStorage using a key and a subKey
 * @param key - The key to use when fetching the data.
 * @param subKey - The subKey under the key to use when fetching the data.
 * @returns The data retrieved from localStorage for the given subKey, or null if no data was found.
 */
function getLocalStorageData(key: string, subKey: string): any {
  const storedData = localStorage.getItem(key);
  const dataObject = storedData ? JSON.parse(storedData) : {};
  return subKey in dataObject ? dataObject[subKey] : null;
}

/**
 * Save data to localStorage under a key and subKey
 * @param key - The key to use when storing the data.
 * @param subKey - The subKey under the key to use when storing the data.
 * @param data - The data to store in localStorage.
 */
function setLocalStorageData(key: string, subKey: string, data: any): void {
  let storedData = localStorage.getItem(key);
  const dataObject = storedData ? JSON.parse(storedData) : {};
  dataObject[subKey] = data;
  localStorage.setItem(key, JSON.stringify(dataObject));
}

/**
 * Remove a specific subKey from a key or the entire key from localStorage
 * @param key - The key to use when removing the data.
 * @param subKey - The subKey under the key to remove from the data. If not provided, the entire key is removed.
 */
function removeLocalStorageData(key: string, subKey?: string): void {
  if (subKey) {
    let storedData = localStorage.getItem(key);
    if (storedData) {
      const dataObject = JSON.parse(storedData);
      delete dataObject[subKey];
      localStorage.setItem(key, JSON.stringify(dataObject));
    }
  } else {
    localStorage.removeItem(key);
  }
}

const myLocalStorage = {
  get: getLocalStorageData,
  set: setLocalStorageData,
  remove: removeLocalStorageData,
};

export default myLocalStorage;

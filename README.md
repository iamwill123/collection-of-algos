# A continuing collection of good to know algorithms mainly in JS

It's also a library that can be used in your projects. It contains algos that are both common and un-common.

[![codecov](https://codecov.io/gh/iamwill123/collection-of-algos/branch/main/graph/badge.svg?token=ABC123)](https://codecov.io/gh/iamwill123/collection-of-algos) [![test](https://github.com/iamwill123/collection-of-algos/actions/workflows/run-unit-tests.yml/badge.svg)](https://github.com/iamwill123/collection-of-algos/actions/workflows/run-unit-tests.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

[![Edit example: collection of algos in reactjs](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/example-collection-of-algos-in-reactjs-rnsw71?fontsize=14&hidenavigation=1&theme=dark)

## To use this package in your project

Using Github packages [here](https://github.com/iamwill123/collection-of-algos/pkgs/npm/collection-of-algos) (the choice for hosting this library)

**Installation**
Open your terminal or command prompt, navigate to your project directory and run the following command:

```bash
# using npm
npm install @iamwill123/collection-of-algos@latest

# using yarn
yarn add @iamwill123/collection-of-algos@latest
```

This will install version `latest` version of the package `@iamwill123/collection-of-algos`.

**Import**

For CommonJS (Node.js):

```javascript
const algos = require('@iamwill123/collection-of-algos');
```

For ES6 syntax:

```javascript
import algos from '@iamwill123/collection-of-algos';
```

**Usage**

```javascript
algos.nativeSort();
```

**Import specific functions**

```javascript
import { bubbleSort, nativeSort } from '@iamwill123/collection-of-algos';
```

**Usage**

```javascript
let exampleArr = [5, 3, 1, 4, 2];
// create shallow copy of the array
const unsortedArr = [...exampleArr];
const obj1 = { arr: unsortedArr };

// using a promise chain
bubbleSort(obj1).then(({ arr }) => {
  console.log(arr); // [1, 2, 3, 4, 5]
});

// or using async/await
const { arr: arrOfNums } = await bubbleSort(obj1);

console.log(arrOfNums); // [1, 2, 3, 4, 5]

const obj2 = {
  arr: [
    { name: 'John', age: 23 },
    { name: 'Mike', age: 32 },
    { name: 'Chris', age: 11 },
    { name: 'Nick', age: 19 },
  ],
  key: 'age',
};
const { arr: arrOfObjs } = await nativeSort(obj2);

console.log(arrOfObjs);
// [
//   { name: 'Chris', age: 11 },
//   { name: 'Nick', age: 19 },
//   { name: 'John', age: 23 },
//   { name: 'Mike', age: 32 },
// ]
```

In this code, `bubbleSort` and `nativeSort` are specific functions imported from the `@iamwill123/collection-of-algos` package. `bubbleSort` is a sorting algorithm that's being applied to an array of numbers, while `nativeSort` is used to sort an array of objects by a specific key.

Remember, before using `await`, you should ensure that your code is inside an `async` function. The `await` operator is used to wait for a Promise. It can only be used inside an `async` function.

## Using from NPM [here](https://www.npmjs.com/package/collection-of-algos) (no longer supported)

```bash
# using npm
npm install collection-of-algos

# using yarn
yarn add collection-of-algos
```

## Work with this repo locally

In your terminal

```bash
# install dependencies
yarn

# serve the app
yarn dev
```

## Running unit tests

```bash
# run all tests
yarn test

# for coverage report
yarn coverage
```

## local server to test functions locally (Ctrl-C to stop)

<http://localhost:3000>

## Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/williampeiyuan/)

## /docs-dist (The visualizer codebase)

- Currently contains the build dist for the documentation folder which is currently hidden.
- Once it's in a good place I will makde it public.

## Todos

- [ ] Think about separating each algo into its own page
- [ ] Add notes and drawings for each algo
- [ ] Unit the helper functions
- [ ] Docker support

Using Docker (_WIP_ parcel watch is not working)

```bash
# build the docker image
docker-compose build

# serve the app
docker-compose up

# Stop & remove the container
docker-compose down
```

### A continuing collection of good to know algorithms mainly in JS

It's also a library that can be used in your projects. It contains algos that are both common and un-common.

[![codecov](https://codecov.io/gh/iamwill123/collection-of-algos/branch/main/graph/badge.svg?token=ABC123)](https://codecov.io/gh/iamwill123/collection-of-algos) [![test](https://github.com/iamwill123/collection-of-algos/actions/workflows/run-unit-tests.yml/badge.svg)](https://github.com/iamwill123/collection-of-algos/actions/workflows/run-unit-tests.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

### To use this package in your project

First install the package

``` bash
# using npm
npm install collection-of-algos

# using yarn
yarn add collection-of-algos
```

Import the functions you want in your TypeScript or JavaScript project, see the test cases for usage examples.

``` javascript
import { bubbleSort, nativeSort } from 'collection-of-algos'

const obj1 = { arr: [5, 3, 1, 4, 2] }
const { arr: arrOfNums } =  bubbleSort(obj1)

console.log(arrOfNums) // [1, 2, 3, 4, 5]

const obj2 = {
  arr: [
    { name: 'John', age: 23 },
    { name: 'Mike', age: 32 },
    { name: 'Chris', age: 11 },
    { name: 'Nick', age: 19 },
  ],
  key: 'age',
}
const { arr: arrOfObjs } = nativeSort(obj2)

console.log(arrOfObjs)
// [
//   { name: 'Chris', age: 11 },
//   { name: 'Nick', age: 19 },
//   { name: 'John', age: 23 },
//   { name: 'Mike', age: 32 },
// ]

```

#### Work with this repo locally

In your terminal

``` bash
# install dependencies
yarn

# serve the app
yarn dev
```

Using Docker (*WIP* parcel watch is not working)

``` bash
# build the docker image
docker-compose build

# serve the app
docker-compose up

# Stop & remove the container
docker-compose down
```

#### Running unit tests

``` bash
# run all tests
yarn test

# for coverage report
yarn coverage
```

#### local server to test functions locally (Ctrl-C to stop)

<http://localhost:3000>

#### Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/williampeiyuan/)

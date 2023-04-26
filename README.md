#### A continuing collection of good to know algorithms mainly in JS.
It's also a library that can be used in your projects. It contains algos that are both common and un-common.

#### To use this package in your project

First install the package

``` bash
# using npm
npm install collection-of-algos

# using yarn
yarn add collection-of-algos
```

Import the functions you want in your TypeScript or JavaScript project

``` javascript
import { bubbleSort } from 'collection-of-algos'

const sortedArray = bubbleSort([3, 2, 1])
console.log(sortedArray) // [1, 2, 3]

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

http://localhost:3000

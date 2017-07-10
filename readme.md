# Macquarie Code Challenge

Congratulations on making it this far!
We are now going to be examining your coding abilities.

### Introduction

We will keep the examination fairly short as we appreciate that your time is valuable. It should take no more than 1-2 hours.
We will be doing most of the boilerplate code so that you will not need to spend time setting things up.

### Skills we are examining

- Responsive design (for this demo we will be using bootstrap as our css framework)
- JavaScript
- AngularJS (do **not** include jQuery or any other library)
- Automated testing of JavaScript
- Git

### Things we will be looking for

- Simple, testable, readable code
- Good JavaScript and AngularJS practices

### Do not do too much!

This is only a demo, do not break yourself! If something is taking too long,
leave it and we can discuss it later.

A few things you don't have to worry about in order to keep the time down:

- jshint (although you are welcome to include it to ensure your code consistency)
- concatenation
- minification
- cross browser support (*we will be reviewing on the latest version of chrome*)
- comprehensive testing (a few will be fine)

### System Prerequisites

- node
- npm
- bower
- sass
- grunt
- karma (`npm i karma-cli -g`)

## Setup

1. Fork this repository
2. Create a new branch titled - 'my-feature-request'
3. run `npm i` and `bower i` to install dependencies
4. Create your application code and tests (see below)
5. Send us a link to your branch when you are finished

### Development

This project uses `grunt` to build the sass files
To build the css run `grunt` or `grunt default`
The sass will automatically recompile for you if you run `grunt watch`

## Requirements

### Functionality
We are looking to make a simple staff search application.
As the user types a *search query* the matching results are shown.

#### Desktop view:

![Desktop View](https://bitbucket.org/cogddt/new-hire-test/raw/master/documentation/desktop.png)

#### Mobile view:

![Mobile View](https://bitbucket.org/cogddt/new-hire-test/raw/master/documentation/mobile.png)


When the user types in the search box it should filter the results

the query will be in the form:
`'property:value prop2:value2'`
Example:
`'name:alex'`
`'office:sydney role:teacher'`

If no results are found the *error view* is shown

![Multi Selection](https://bitbucket.org/cogddt/new-hire-test/raw/master/documentation/multi-find.png)


#### Error view

![Error View](https://bitbucket.org/cogddt/new-hire-test/raw/master/documentation/error.png)

#### Staff data

```
var data = [
        {
            name: 'Alex',
            role: 'Developer',
            office: 'Sydney'
        },
        {
            name: 'Ben',
            role: 'Developer',
            office: 'Wogga'
        },
        {
            name: 'Sam',
            role: 'Teacher',
            office: 'Sydney'
        },
        {
            name: 'Steve',
            role: 'Builder',
            office: 'Melbourne'
        },
        {
            name: 'Josh',
            role: 'Driver',
            office: 'Sydney'
        },
        {
            name: 'Sarah',
            role: 'Lawyer',
            office: 'Brisbane'
        }
    ];
```
For avatars use:
``http://api.adorable.io/avatars/120/[ persons name goes here ]@adorable.png``

eg

``http://api.adorable.io/avatars/120/alex@adorable.png``

### Tests
We would like to see a few automated tests to ensure your code is running correctly.
Do not worry about coding up a comprehensive suite, just one or two tests to show that you know how to construct and use tests.

- We are using `Karma` + `mocha` + `expect.js` + `sinon.js` [if you need it].
- These are already configured and will install when you run `npm i`
- You can start the `Karma` tests by typing `npm test` or `karma start` into the command line at the root of the project
- `Karma` is setup to automatically run any test suites found in the `test` folder (`test/**/*.js`)

### Style
You should be able to get by mostly with `twitter bootstrap` which is already included in `main.js`.
You are welcome to add additional styles if you would like.


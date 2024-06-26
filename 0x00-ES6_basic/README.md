# 0x00. ES6 Basics

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8nfBRAssY0DuETYwdwyqqw.png" alt="ES6" width="100%" />

ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Resources:

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

---

## Requirements:

- All your files will be executed on `Ubuntu 18.04 LTS` using `NodeJS 12.11.x`
- Allowed editors: __vi, vim, emacs, Visual Studio Code__
- All your files should end with a new line
- A __README.md__ file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using the `Jest` Testing Framework
- Your code will be analyzed using the linter `ESLint` along with specific rules that we’ll provide

## Work environment setup

### Install NodeJS 12.11.x

(in your home directory):

```console
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Check version

```console
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.


## Configuration files
Add the files below to your project directory

<details>
<summary>package.json</summary>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</details>

<details>
<summary>babel.config.js</summary>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
 </details>

<details>
<summary>.eslintrc.js</summary>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</details>

---

## Files:

### [0. Const or let?](./0-constants.js)

### [1. Block Scope](./1-block-scoped.js)

### [2. Arrow functions](./2-arrow.js)

### [3. Parameter defaults](./3-default-parameter.js)

### [4. Rest parameter syntax for functions](./4-rest-parameter.js)

### [5. The wonders of spread syntax](./5-spread-operator.js)

### [6. Take advantage of template literals](./6-string-interpolation.js)

### [7. Object property value shorthand syntax](./7-getBudgetObject.js)

### [8. No need to create empty objects before adding in properties](./8-getBudgetCurrentYear.js)

### [9. ES6 method properties](./9-getFullBudget.js)

### [10. For...of Loops](./10-loops.js)

### [11. Iterator](./11-createEmployeesObject.js)

### [12. Let's create a report object](./12-createReportObject.js)

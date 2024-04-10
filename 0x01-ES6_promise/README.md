# ES6 Promises
<img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*_WSE_FQrGvNyEZEp7-PQow.png" alt="async" width="100%" />

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

## Learning Objectives

- Promises (how, why, and what)
- How to use the __then__, __resolve__, __catch__ methods
- How to use every method of the `Promise object`
- __Throw / Try__
- The `await` operator
- How to use an `async function`

## Resources

- [Introduction to Javascript Promise](https://web.dev/promises/)
- [The await keyword in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [async in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Try /Throw in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Requirements

- All your files will be executed on `Ubuntu 18.04 LTS` using `NodeJS 12.11.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup

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

<details>
<summary>utils.js</summary>
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
</details>

---

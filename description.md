- Lesson 47: Project setup

  `$ npm init`

  `$ npm i jest puppeteer jest-puppeteer`

  `$ npm i @babel/core @babel/preset-env babel-jest`

- Lesson 48: Configuration setup

  Configure jest.

  `$ ./node_modules/.bin/jest --init`

  Add files: `babel.config.js`, `jest.config.js`, `jest-puppeteer.config.js`

- Lesson 50: Create Base Page

  Create files:
    - ./example.test.js
    - ./pages/BasePage.js

- Lesson 51: Framework part 1

  Create files:
    - ./tests/example.test.js
    - ./pages/HomePage.js

- Lesson 52: Framework part 2

  Changes:
  - add methods `clickHomepageLink()`, `clickOnlineBankingMenuLink()`, `clickFeedbackLink()` in file `./pages/HomePage.js` 
  - update `HomePage.js`

  Create files:
    - `./pages/components/TopBar.js`


- Lesson 53: Framework part 3

  Changes:
  - update `file example.test.js`:
    - add `it("Try to login"`
  - refactor - add `constants.js` file, change url

  Create files:
  - `LoginPage.js`

- Lesson 54: Framework part 4

  Changes:
  - add `it("Feedback should work"` in `example.test.js`
  
  Create files:
  - `FeedbackPage.js`
  
<!--
Lesson 49: Babel config source code
Lesson 51: Framework part 1
Lesson 52: Framework part 2
Lesson 53: Framework part 3
Lesson 54: Framework part 4
Lesson 55: End-to-End Tests: part 1
Lesson 56: End-to-End Tests: part 2
Lesson 57: Framework Improvement tips
Lesson 58: Source Code 
-->

<!-- http://zero.webappsecurity.com/ -->
<!-- https://clone-zero-bank.netlify.app/index.html -->
# Automation-Framework-using-Jest-and-Puppeteer

### Description:
This repository is the practice of Section #5 "Automation Framework using Jest and Puppeteer" of the course ["Automated Software Testing with Puppeteer"](https://www.udemy.com/course/automated-headless-browser-testing-with-puppeteer/).

In the original course, it is proposed to test the <s> http://zero.webappsecurity.com/</s> resource, but the proposed resource does not function correctly. In this regard, I created a simplified copy of this resource in order to test it. The resource I use for testing is <b>https://clone-zero-bank.netlify.app/index.html</b>.



## Run
Start tests:

`npm run test`

Start tests in watch mode:

`npm run test-watch`


### Settings

Running tests in `headless` mode:

Set `headless: true` in [`jest-puppeteer.config.js`](./jest-puppeteer.config.js) file.
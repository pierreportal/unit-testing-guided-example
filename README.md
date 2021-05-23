![Ironhack Logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Unit Testing - Guided example

<br>

## Iteration 1 - Exploring the project

At the root of this repository you'll find multiple files that are worthy of notice.

First, `package.json`. This files contains the dependencies necessary to make the project work, as well as the configurations necessary to run our unit tests, format and lint our code. Plus, it holds a set of custom scripts that we can run using the `npm run` command. You won't have to change the contents of this file.

Second, you will find a tests directory. This directory contains multiple files with the `.spec.js` extensions. It is common to name unit test files ending with a `.spec.js` or `.tests.js` extension.

Files such as `package-lock.json`, and directories such as `.github` are not relevant right now. By the end of this bootcamp, you will know much more about all these terms that probably don't make too much sense now. Patience :pray:

## Iteration 2 - Setting up the project

Open your terminal.

To run unit test in your machine, you must have both `Node.js` and `npm` installed. To insure you have both, you can run the following commands:

```shell
$ node -v
# or

$ npm -v
```

As a result, you should see the versions of either installed on your machine.

As stated, our `package.json` file holds a list of the dependencies for this project. However, these dependencies are not automatically fetched when you clone the repository into your machine. To fetch the dependencies, run the command `npm install` (or the equivalent shorter command `npm i`) to install the project's dependencies. Follow the instructions below:

```shell
# after you cloned this guided example, navigate inside the repo
$ cd unit-testing-guided-example

# and install project dependencies
$ npm i
```

After this point, you will see that a new file has been created (`package-lock.json`) but no changes will be made from your side inside there so no need to dig deeper into it for now.

## Iteration 3 - Running unit tests, seeing failures

Before working on any of the functionalities that we intend to unit test, let's run the `npm run test` command on our terminal.

```shell
# in the root of this project
$ npm run test
```

![Image of terminal with failing test results](https://user-images.githubusercontent.com/7128083/114206907-ba306080-9953-11eb-8660-16161418590e.png)

You should notice two distinct forms of output. First, your terminal should display a list of the failed unit tests. Second, a file named **`test-report.html`** should be automatically generated at the root of the project. Opening this file will display the results of the unit tests in the browser.

:bangbang: If you get a message that reads "jest: command not found", you might have skipped the previous step where we installed dependencies using `npm install`.

![Image of browser with failing test results][https://user-images.githubusercontent.com/7128083/114205765-90c30500-9952-11eb-85e5-dbb5bfd36028.png]

Since we don't want to have to run these tests every time we make an addition or change to our solution, we can start them in a "watch" mode. That means that `jest` will be looking for changes in our code, and will re-run our automated tests with every change.

To run the test-runner in "watch mode", run the `npm run test:watch` in your terminal. From now on, every time you save a file, your unit tests will be executed.

To see the results of the unit tests being updated automatically in the browser window, you can use the VSCode extension ["Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to open the `test-report.html` file.

## Iteration 4 - Passing our first tests

To pass the first tests, open the `calculator.js` file and complete the `sum` function.

If you simply return a sum of both arguments from the `sum` function, you should see at least the first two tests of the "Sum" suite passing. However, a few other tests in the test suite are failing.

For this particular `sum` function, we don't expect it to simply sum any two values that it is passed. We want a few edge cases to be considered an properly handled.

- If the function is called with a single number, and no second argument is passed, the function should act as if the second argument passed equals `0`.
- If the function is called without any arguments, the function should act as if both arguments passed equal `0`.

The `subtract` function follows the same logic. Complete it, and ensure you're checking the results of the unit tests to ensure that all of the requirements are met.

## Iteration 5 - Dividing

In maths, [we cannot divide a number by 0](https://en.wikipedia.org/wiki/Division_by_zero). However, if you perform a division operation in JavaScript, the value returned is `Infinity`.

JavaScript takes a relaxed approach on this topic, but we don't want to allow our `divide` function to make this mistake. As such, if the user calls the function `divide` and passes a `0` as the second argument, you should "throw" an error with the message "Cannot divide by 0".

To throw an error in JavaScript, you should write:

```js
throw new Error('An explanatory error message');
```

Our `divide` unit tests will experiment with dividing plain integers, floating point numbers, but also dividing by `0`. If this edge case is not considered, the last test of the test suite will fail.

## Iteration 6 - Creating our own tests

Up until now, we've been coding our functions to pass our tests. What we've been unknowingly doing is following a testing methodology called "Test-Driven Development". This happens when the tests have been written in advance, and we're simply completing our functions to match the specifications that had been originally defined.

Now, we'll work in reverse.

You can inspect and compare the other `*.spec.js` files to understand how _suites_, _tests_ and _assertions_ are made with Jest.

You're given a `multiply` function inside of the `calculate.js` file. It is already complete, and requires no work from you side.

However, there are no unit tests for this function as of yet.

Create a file named `multiply.spec.js`. In this file you'll create unit tests for the `multiply` function.

At the top of `multiply.spec.js`, you should import the `multiply` function that is exported by `calculator.js`. You can simply copy and paste the following line.

```js
const { multiply } = require('./../calculator.js');
```

Create a test suite for the "Multiply" functionality.

```js
describe('Multiply', () => {
  // Our tests will be added here.
});
```

Then, inside of this test suite, we'll be writing each of the following tests that consider the following scenarios.

- Function is called with two positive integers. The value returned should be the result of the multiplication of both values.
- Function is called with a negative and a positive integer. The value returned should be a negative number.
- Function is called with any number and a number `0`. The value returned should be `0` (any number multiplied by `0` equals `0`).

It's up to you to decide what values the `multiply` function should be called with, and what values are expected as a result.

Follow the same naming pattern for tests that you find in the other test files. You can also consult [the `jest` documentation](https://jestjs.io/docs/expect), although you shouldn't need to.

## Iteration 7 - Committing solution and checking results

You have solved all of the prior iterations. All of the tests are passing locally.

Let's commit our work, and push it to GitHub.

Immediately after doing so, you should see something like this on your fork of the repository on GitHub:

![Image of ongoing tests](https://user-images.githubusercontent.com/7128083/114205759-8f91d800-9952-11eb-86dc-36b64512d743.png)

This means that GitHub is executing the unit tests for your project on their own machines.

After a couple of minutes at most the tests results should be ready.

If all of your tests are passing, you should see a green checkmark next to your commit message.

![Image of passing tests](https://user-images.githubusercontent.com/7128083/114199197-feb7fe00-994b-11eb-8b41-0dc5a916a3fb.png)

If any of the tests are failing, you'll see a red cross instead.

![Image of failing tests](https://user-images.githubusercontent.com/7128083/114199210-0081c180-994c-11eb-93ff-b1833ad27121.png)

If you want to dive in depth into your test results, or verify why your tests are failing on GitHub, you can press this status symbol or navigate to the "Actions" tab in your repository.

![Image of actions tab](https://user-images.githubusercontent.com/7128083/114199203-ff509480-994b-11eb-9b40-1b65b0a2a45a.png)

What we have implemented into this project is a so-called "Continuous Integration/Continuous Delivery" (CI/CD) system.

**Note that you might not always be able to complete every iteration on every lab, or to pass every single test. This shouldn't demotivate you. Automated tests are an important tool to gather feedback but are not the one true measure of the quality of your work or your worth as a developer.**

Best of luck 💙

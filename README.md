# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Useful Links

-   **UI Design** - Open [Figma](https://www.figma.com/file/nZn3yKH8VjBbJlaZ7jdyQK/SINFO-Workshop?node-id=0%3A1) to view the design specs
-   **Github Repo** - Open [Github](https://github.com/memsql/sinfo-workshop)
-   **Codesandbox** - Open ...

## Setup

### No-Setup Setup (recommended)

You should be able to go through the workshop in the browser, which requires no setup. Go to this codesandbox and click `Fork` (in the top right corner).

### Local Setup

If you'd prefer to work through the workshop on your computer, follow the instructions in this section.
Please keep in mind the workshop time is very limited and if you have issues with this setup, you should opt for the Codesandbox alternative.

#### System Requirements

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) v2 or greater
-   [NodeJS](https://nodejs.org/en/) v10 or greater
-   [npm](https://www.npmjs.com/get-npm) v6 or greater

To verify if these are properly set up, run the following commands:

```
git --version
node --version
npm --version
```

#### Clone project

If all the above requirements are met, run the following commands to clone and start the project:

```
git clone https://github.com/memsql/sinfo-workshop.git
cd sinfo-workshop
npm start
```

Note: If you want to commit and push your work as you go, fork first and then clone your fork instead of cloning this repo directly.

## Workshop Parts

These are the files where you have things to complete in each phase of the workshop.

| Part               | Files                                                                                                                                                                                                                      |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 - Component      | [Button.js](https://github.com/memsql/sinfo-workshop/blob/p1-start--component/src/components/Button.js)                                                                                                                    |
| 2 - Styling        | [Button.js](https://github.com/memsql/sinfo-workshop/blob/p2-start--styling/src/components/Button.js), [Button.css](https://github.com/memsql/sinfo-workshop/blob/p2-start--styling/src/components/Button.css)             |
| 3 - Storybook      | [Button.story.js](https://github.com/memsql/sinfo-workshop/blob/p3-start-storybook/src/components/Button.story.js)                                                                                                         |
| 4 - Tests          | [Button.test.js](https://github.com/memsql/sinfo-workshop/blob/p4-start--tests/src/components/Button.test.js), [Input.test.js](https://github.com/memsql/sinfo-workshop/blob/p4-start--tests/src/components/Input.test.js) |
| 5 - Extra exercise | [Button.js](https://github.com/memsql/sinfo-workshop/blob/p5-start--state/src/components/Button.js)                                                                                                                        |

### Emoji Hints

In each part, relevant files will have comments to guide you through the exercise.

-   🚩 A good place to start the exercise.
-   🎯 There is work to be done on this section.
-   💡 A syntax or naming hint to put you in the right direction.
-   🔎 Something was changed here. You don't need to do anything, just letting you know.
-   📙 Link to documentation that might be helpful to this exercise.

## Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run storybook`

Starts the Storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

#### `npm run test:generate-output`

Launches the test runner and saves the results into the file `.jest-test-results.json`, to be displayed on Storybook.

##### `npm run test:generate-output -- --watch`

Launches the test runner and re-runs it when changes are made. Results are saved into `.jest-test-results.json` as well.

## Learn More

A list of the helpful links left through the repo.

#### 1. React Components

-   [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
-   [React documentation](https://reactjs.org/)
-   [Default Props](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)
-   [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### 2. Styling

-   [classnames](https://www.npmjs.com/package/classnames)

#### 3. Storybook

-   [Storybook React Docs](https://storybook.js.org/docs/react/get-started/introduction)

#### 4. Testing

-   [Testing Library jest-dom](https://github.com/testing-library/jest-dom)
-   [Testing with Storybook](https://storybook.js.org/docs/react/workflows/testing-with-storybook)
-   [Storybook addon Jest](https://www.npmjs.com/package/@storybook/addon-jest)

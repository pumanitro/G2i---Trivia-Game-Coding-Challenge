## Main description

#### Trivia Game Coding Challenge

> Do not use a boilerplate like React Boilerplate or Ignite for this challenge.

I have used my own basic boilerplate that I am using for interviews.
It is not external, available boilerplate.
It is my own, I use to save time for project configuration for interview processes.
Additionally, I had to adjust it to solve this particular problem.

⚠ ReactQueryDevtools are turn on in development mode. Don't be surprised with some opened additional window.

## How it looks

![Home Page](./Home.png)
![Question Page](./Question.png)
![Score Page](./Score.png)

## How to run it

`yarn install` then `yarn start`

## Technological stack choices

- ant-design
- styled-components
- typescript
- cra
- react
- react-router
- react-query (server-state library)
- redux (client-state library)
- axios
- eslint + prettier + husky (because I love clean code <3)

## Directories structure

All code is under /src directory

- assets - directory for static assets like .svg icons
- components - reusable components in the wole application like button
- global - components that are used once in a whole application to provide some functionality like RWD provider or layout
- helpers - functions that can be reused in few places in whole application
- pages - component responsible for given url adress like /home -> Home.tsx component

## What I haven't done but will consider in different types of project

- using different git handling mechanism like GitFlow

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn start:build`

Calls `rimraf build && react-scripts build && serve -s build`.

### `yarn lint`

Checks eslint issues for project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# dashboard-material-ui-ts-react

A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.

## Project Structure

This branch has an express server that serves the dashboard data and the static web application once it's built.  The source for the entire application (Server/Client) is in the `./src` folder and is written to the `./build` folder during build.

The project source is organized as follows:

* `./src` contains the required react app base files
* `./src/app` contains the react app dashboard code
* `./src/server` source for the express server app
* `./src/structs` contains the shared data structures used by the client and server

## Getting started

To run the application in development mode you first need to build it

```ssh
$ npm run app:build && npm run server:build
```

Runs the React app in the development mode
```
$ npm run app:start
```

Run the server app in development mode on a different port from the React app development server
```
$ PORT=5000 npm run server:dev
```

## Create Steps

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the [TypeScript](https://www.typescriptlang.org/) option.

Added the Material-UI react component framework with

```ssh
$ npm i -S @material-ui/core @material-ui/icons recharts
$ npm i -D @types/recharts
```

Added the [Dashboard template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard) and converted it to TypeScript

Added express server using [Express application generator](https://expressjs.com/en/starter/generator.html) and converted the generated source to TypeScript.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the client and server applications for production deployment

### `npm run docker`

Builds docker image from docker file

### `npm run app:start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run app:test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run app:build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run app:eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

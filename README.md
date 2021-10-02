# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn jest-test`

Launches the jest test runner in the interactive watch mode.

### `yarn cypress-test`

Launches the cypress test runner. 
Make sure to serve the application using the `serve` command and start the json-server using the `start-json-server` command!

### `yarn cypress-open`

Open the cypress e2e testing environment. 
Make sure to serve the application using the serve command and start the json-server using the start-json-server command!

### `yarn start-json-server`

Starts the json-server with song and artist resources fed as db.json file.

### `yarn serve`

Serves the latest build in the `build` folder.\
Used for running cypress tests against.

## Tech stack

The application is built using the React front-end web framework together with Sass, TailwindCSS and Material UI Icons.
For backend communication the JavaScript fetch API has been used.
The Jest testing setup is built using Jest with React-testing-library and mock-service-worker.
The Cypress testing setup is built using Cypress with cypress-testing-library.

Jan-Willem van Bremen

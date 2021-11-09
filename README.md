# Beep Boop: A React Component UI Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs the storybook component explorer on port 6006: [http://localhost:6006/](http://localhost:6006/)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Includes hot reloading. 

Note that there isn't much on App.tsx since this is component library and can be fully used with storybook. But in order to run the App.tsx, ensure that the following dependencies are included (required due to version conflicts between storybook and CRA, this may no longer be relevant if the CRA version gets updated). 

```json
  "devDependencies": {
    // ...
    "babel-loader": "8.1.0",
    "webpack": "4.44.2"
  },
```

The above can be removed if only relying on storybook. 
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# react-todo
A Todo app built with React ecosystem and modular design.

* Demo
  * [demo site](https://react-todo.koshuang.now.sh/)

## Features
1. Add todo
1. Check todo
1. Delete todo
1. Filter todo
1. Cache (After reload)

## Tech Stack
1. Typescript
1. React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
1. styled-component
1. immer
1. Jest / enzyme / @testing-library/react
1. storybook

## Architecture
1. Modular design
1. Custom PobSub hook for components to easily interact with each others
1. Theme design

## Modules
### app
`app` module is a special module which is an application module grab depends on core module and other feature modules

### core
`core` module is supposed to be a framework of an application which define the application core architecture. Currently `core` module only defines page layout, but it will evolve to handle more stuff like communication, etc.

### shared
`shared` module is a common module to give each feature module reusable utility like common components, utility classes/functions, etc.

### pubsub
`pubsub` module is a communication module to provide a way for components communicate with each other. Basically it should follow/implement `core` module's interface in order to make feature modules depends on abstract instead of implementation. In order to let application be able to switch to other implementation like `rxjs`.

### todo-list
`todo-list` module is a feature module to handle CRUD actions for todo. Providing local cache to let user can use offline.

## TODOs
1. Responsive design for mobile
1. Using better reactive library like Rxjs
1. Integrate with backend API
1. Offline app features

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run storybook`

Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.

### `build-storybook`

Build storybook

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

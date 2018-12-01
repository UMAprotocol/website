# Task Runner
Front-end tool for task automation.

## Tips
Use bash terminal (default terminal on OSX and Linux, [GitBash](http://git-scm.com/downloads) on Windows).

## Dependencies
1. Latest version of [NodeJS](http://nodejs.org/) (min v6.0.0)
2. Latest version of any of the following package managers

- [NPM](https://www.npmjs.com/) (min v5.3.0)
- [Yarn](https://yarnpkg.com/) (min v0.20.4)

## Install
In the root directory of the project run:

```
npm install
```

or

```
yarn install
```

If for some reason, NPM/Yarn throws errors and does not want to install the dependencies, please see https://goo.gl/iSz4w8.

TL;DR

Run

```
npm cache clean
```

If that does not fix the issue, manually remove everything in the `~/AppData/Roaming/npm-cache` folder.

MAC/Linux users should try and find another way to delete this folder's contents because they do not have access to this folder by default.

Then run the install script again.

## MAC OSX Setup

If you are using OSX, you need to run the following (only once):

1. `brew update`
2. `brew install libtool automake autoconf nasm`
3. `brew reinstall libpng`

## Linux setup

If you are using linux environment, you need to run the following (only once):

1. `sudo apt-get install libtool automake autoconf nasm`

## Development
To start the project in development mode, run:

```
npm start
```

or

```
yarn start
```

If you want to serve the files via your local server instead of the Browsersync server, run the start command and supply the development URL argument:

```
npm start -- --dev-url "http://your-server.url/path/to/project"
```

or

```
yarn start -- --dev-url "http://your-server.url/path/to/project"
```

## Build
To build the project, run:

```
npm run build
```

## Production
To build the project for production environment (e.g. minimize bundles css and js files and optimize images), run:

```
npm run prod
```

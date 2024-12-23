// start.js
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const chalk = require('react-dev-utils/chalk');
const execSync = require('child_process').execSync;  // react-scripts 실행을 위해 사용
const paths = require('../config/paths');

// Set default port
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

// Start react-scripts development server
const startDevServer = () => {
  try {
    console.log(chalk.cyan('Starting the development server...\n'));
    execSync('react-scripts start', { stdio: 'inherit' });  // react-scripts start 실행
  } catch (error) {
    console.error(chalk.red('Error starting development server:', error));
    process.exit(1);
  }
};

// Start the dev server
startDevServer();

# Learning JavaScript

## Chapter 2: JavaScript Development Tools

### Tools to get:

* A good editor, such as Atom.

* Git, a version control that helps you manage your project as it grows, andcollaborate with other developers.

* Node, which allows you to run JavaScript outside of the browser (and comes with npm, which gives you access to the rest of the tools on this list).

* Gulp, a build tool that automates common development tasks (Grunt is a popularal ternative).

  ```shell
  sudo npm install -g gulp	
  ```

  * install it globally will need a superuser access right.

* Babel, a transcompiler that converts ES6 code to portable ES5 code. This can be run with gulp. You need to install gulp-babel locally for each project, instead of installing globally.

* ESLint, a linter that helps you avoid common mistakes and makes you a better programmer!

  ```shell
  sudo npm install -g eslint	
  ```

### Steps to start a new JS project

* Create a dedicated directory for the project, called *project root*.

* Make it a Git repository.

  ```shell
  git init
  ```

* Create a *package.json* file. As your project matures, you’ll want a concise way to know what packages your project depends on, and npm does this with a file called package.json.  It can be created simply by:

  ```shell
  npm init	
  ```

  * dependencies are split into *regular dependencies* and *dev dependencies*, the later one are packages that your app can run without, but are helpful or necessary in building your project.
  * when you install local packages, you should add ` --save` or   `--saveDev`  flag. Otherwise, the package will be installed but not listed in the package.json file.
  * Sometimes, you can write all your dependencies into package.json file first, then run `npm install`, it will install any packages listed in the package.json file.

* Create a Gulpfile (gulpfile.js), which is used for build the project automatically, helps you do the repetitive work. Similar as Makefile of C projects.

* Install Gulp local packages

  ```shell
  npm install --save-dev gulp
  ```

* Install the ES6 (aka ES2015) preset locally. Most of time you may want to use ES6 on one project, and ES7 on another. For example, we need ES6 on this project, so:

  ```shell
  npm install --save-dev babel-preset-es2015
  ```

* Create *.babelrc* whose content is : `{"presets":["es2015"]}` With this file in place, any use of Babel in this project recognizes that you’re using
  ES6.

* Install a package called *gulp-babel* locally, which will be used to run Babel with Gulp.

  ```shell
  npm install --save-dev gulp-babel				
  ```

  * To enable this package, you need to edit gulpfile.js, add `const babel = require('gulp-babel');`

* Assume you already get ESLint installed globally, now create an `.eslintrc` configuration file to start using ESLint by following commands, then after answering questions, you are able to get a dedicated config file for you current project, so that ESLint can optimize your code accordingly.

  ```shell
  eslint --init
  ```

* Then install local eslint package:

  ```shell
  npm install --save-dev gulp-eslint
  ```

  * modify gulpfile.js so that the code will be lint once built:

    `const eslint = require('gulp-eslint');`

* *projectRoot/es6*  : a subdirectory for Node source

* *projectRoot/public/es6* : a subdirectory for browser source 

* At last, you can write your JS code, typing `gulp`, which will build and optimize the code. 

* Then you can run it with `node dist/test.js`


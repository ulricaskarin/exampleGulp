# A basic setup with Gulp and Express!

### Get started:
1. vagrant up : installs nodejs and gulp globally
2. npm install : installs all other dependencies

### Basics:
1. ./source/ : where JavaScript and Sass files are written and located (app.js - the entryfile)
2. ./public/ : all buildfiles gathered here (NEVER EVER TOUCH)!
3. HTML-file index.html located in root for easy access if using gh-pages.

### Workflow:
1. Write in CommandWindow: gulp (Starts gulptasks: builds js & sass files | Starts express server).
2. If Error -> might be due to occupied port locally. If that is the case -> change port for express in gulpfile.js
2. See page locally at: localhost:6001 (port number may be changed in gulpfile.js)

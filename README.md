# A basic setup with Gulp and Express!

### Get started:
1. vagrant up : installs nodejs and gulp globally
2. npm install : installs all other dependencies

### Basics:
1. ./source/ : where JavaScript and Sass files are written and located (app.js - the entryfile)
2. ./public/ : all buildfiles gathered here (NEVER TOUCH)!
3. HTML-file index.html located in root for easy access if using gh-pages.

### Workflow:
1. In CommandWindow: gulp (starts gulptasks: builds files including startup of express server).
2. See page locally at: localhost:6001 (port may be changed in gulpfile.js)

// Takes your SCSS files and compiles them to CSS
const sass = require('node-sass');

module.exports = {
  dist: {
    options: {
      style: 'expanded',
      implementation: sass
    },
    files: {
      '<%= paths.src %>/css/compiled/email-components/main.css': '<%= paths.src %>/css/scss/email-components/main.scss',
      '<%= paths.src %>/css/compiled/dummy/main.css': '<%= paths.src %>/css/scss/dummy/main.scss',
    }
  },

  // This task compiles Sass for the browser-baed preview UI.
  // You should not need to edit it.
  preview: {
    options: {
      style: 'compressed',
      implementation: sass
    },
    files: {
      '<%= paths.preview %>/css/preview.css': '<%= paths.preview %>/scss/preview.scss'
    }
  }
};

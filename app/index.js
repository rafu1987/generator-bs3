'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('Bootstrap') + ' generator!'
    ));

    done();
  },

  writing: {
    app: function () {
      this.directory('bootstrap', './').on('end', function() {});
    },
  }
});

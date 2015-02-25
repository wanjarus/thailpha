'use strict';

var m       = require('mithril');

var letters = require('../models/letters.js');

module.exports = function () {
  this.consonants = letters.getAll();

  this.onClick    = function (e) {
    m.route('/letter/' + this.id);
  }
};

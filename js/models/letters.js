'use strict';

var consonants  = require('./dico-consonants.js');
var shortVowels = require('./dico-short-vowels.js');
var longVowels  = require('./dico-long-vowels.js');
var Settings    = require('./settings.js');

var allLetters  = [].concat(consonants, shortVowels);

var getConsonants    = function getConsonants() {
  var settings = Settings.get();
  if (settings.showObsolete === false) {
    return consonants.filter(function (consonant) {
      return consonant.obsolete !== true;
    });
  }
  return consonants;
};

var getVowels       = function getVowels() {
  return {
    short:  shortVowels,
    long:   longVowels,
  };
};

var getByIds   = function getById(query) {
  var settings  = Settings.get();
  var ids       = Array.isArray(query) ? query : [query];
  var result    = allLetters.filter(function (consonant) {
    return ids.indexOf(consonant.id) !== -1;
  });

  // take care of obsolete letters
  if (settings.showObsolete === false) {
    result = result.filter(function (letter) {
      return letter.obsolete !== true;
    })
  }

  if (result.length === 1) {
    return result;
  }

  // sort by the query order
  return result.sort(function (a, b) {
    return ids.indexOf(a.id) > ids.indexOf(b.id);
  });
};

module.exports = {
  getConsonants:  getConsonants,
  getVowels:      getVowels,
  getByIds:       getByIds,
};

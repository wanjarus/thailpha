'use strict';

var m           = require('mithril');

var nav         = require('../../components/nav');
var Settings    = require('../../models/settings.js');
var letterView  = require('./home-view-letter');

var letter      = function letter(ctrl) {
  var currentLetter = ctrl.vm.current();
  if (currentLetter === false) return '';
  return letterView(ctrl);
};

function numbers(ctrl) {
  var settings        =  Settings.get();
  if (settings.showNumbers !== true) return '';
  return m('section#numbers.home-section', [
    m('header', [
        m('h1.h1', 'numbers'),
      ]
    ),
    m('ul.preview-list', [
      ctrl.numbers.map(function (number) {
        return m('li.preview-list-item', {
          id:         number.id,
          key:        number.id,
          onclick:    ctrl.onClick.bind(number),
        }, [
          m('p.thai-letter', {
            className: number.longId,
          }, number.letter),
          m('p.preview-list-item-rtgs', number.rtgs)
        ]);
      })
    ]),
  ]);
}

// fixed the focus issue
// http://dansajin.com/2012/12/07/fix-position-fixed/
module.exports = function(ctrl) {
  return [
    m('section#consonants.home-section', [
      m('header', [
          m('h1.h1', 'consonants'),
        ]
      ),
      m('ul.preview-list', [
        ctrl.consonants.map(function (consonant) {
          return m('li.preview-list-item', {
            id:       consonant.id,
            key:      consonant.id,
            onclick:  ctrl.onClick.bind(consonant),
          }, [
            m('p.preview-list-item-rtgs', consonant.rtgs),
            m('p.thai-letter', {
              className: consonant.longId,
            }, consonant.letter),
            m('p.preview-list-item-meaning', consonant.meaning),
          ]);
        })
      ]),
    ]),
    m('section#vowels.home-section', [
      m('header', [
          m('h1.h1', 'vowels'),
        ]
      ),
      m('dl',[
        m('dt.h2', 'short'),
        m('dd', [
          m('ul.preview-list.preview-list-vowels', [
            ctrl.vowels.short.map(function (shortVowel) {
              return m('li.preview-list-item', {
                id:       shortVowel.id,
                key:      shortVowel.id,
                onclick:  ctrl.onClick.bind(shortVowel),
              }, [
                m('p.thai-letter', shortVowel.letter),
                m('p.preview-list-item-rtgs', shortVowel.rtgs)
              ]);
            })
          ]),
        ]),
        m('dt.h2', 'long'),
        m('dd', [
          m('ul.preview-list.preview-list-vowels', [
            ctrl.vowels.long.map(function (longVowel) {
              return m('li.preview-list-item', {
                id:       longVowel.id,
                key:      longVowel.id,
                onclick:  ctrl.onClick.bind(longVowel),
              }, [
                m('p.thai-letter', longVowel.letter),
                m('p.preview-list-item-rtgs', longVowel.rtgs)
              ]);
            })
          ]),
        ]),
      ]),
    ]),
    numbers(ctrl),
    nav(ctrl),
    letter(ctrl),
  ];
};

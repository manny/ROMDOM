var fs = require('fs'),
    game = require('./Games/zelda'),
    utils = require('./utils'),

    // I know this is dirty, but I will use _.extend later instead.
    romdom = utils;

// Returns an object corresponding to the current game being emulated.
romdom.currentGame = function() {
  return game;
};
romdom.game = game;

module.exports = romdom;

'use strict';

var Warehouse = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'warehouse');
  this.anchor.setTo(0.5, 1);
};

Warehouse.prototype = Object.create(Phaser.Sprite.prototype);
Warehouse.prototype.constructor = Warehouse;

Warehouse.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Warehouse;

'use strict';

var Plane = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'plane', frame);
  this.anchor.setTo(0.5, 0.5);
  // initialize your prefab here

  this.game.physics.arcade.enableBody(this);
  
  this.body.collideWorldBounds = true;
  this.body.bounce.setTo(0, 0);
};

Plane.prototype = Object.create(Phaser.Sprite.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.update = function() {
  if (this.angle <= 90) {
    this.angle += 2.5;
  }
};

Plane.prototype.handleInput = function(cursors) {
  console.log(this.angle);
  if (cursors.up.isDown) {
    this.body.velocity.y = -80;
    this.angle -= 5;
    
    if (this.angle <= -90) {
      this.angle = -90;
    }
  }
  
  if (cursors.down.isDown) {
    this.body.velocity.y = 360;
    this.angle += 5;
  }
  
  if (this.angle >= 90) {
    this.angle = 90;
  }
  
  if (cursors.right.isDown) {
    this.body.velocity.x = 80;
  }
}

module.exports = Plane;


'use strict';

var Ground = require('../prefabs/ground');
var Warehouse = require('../prefabs/warehouse');
var Plane = require('../prefabs/plane');

function Play() {}
Play.prototype = {
  create: function() {
    this.game.stage.backgroundColor = '0x00cbff';

    // create and add a new Ground object
    this.ground = new Ground(this.game, 0, this.game.height - 84, this.game.width, 84);
    this.game.add.existing(this.ground);
    
    this.warehouse = new Warehouse(this.game, this.game.width/2, this.game.height - 20, 35, 22);
    this.game.add.existing(this.warehouse);
    
    this.plane = new Plane(this.game, 100, 100, 28, 28);
    this.game.add.existing(this.plane);
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 240;
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
    /*
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'yeoman');
    this.sprite.inputEnabled = true;

    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.setTo(1,1);
    this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
    this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

    this.sprite.events.onInputDown.add(this.clickListener, this);
    */
  },
  update: function() {
    this.game.physics.arcade.collide(this.plane, this.ground);
    
    this.plane.handleInput(this.cursors);
  },
  clickListener: function() {
    this.game.state.start('gameover');
  }
};

module.exports = Play;
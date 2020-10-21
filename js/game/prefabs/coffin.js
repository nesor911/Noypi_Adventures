var Coffin = function(game, x, y, key, frame){
  key = 'coffin';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(0.75);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onRevived.add(this.onRevived, this);
};

Coffin.prototype = Object.create(Phaser.Sprite.prototype);
Coffin.prototype.constructor = Coffin;

Coffin.prototype.onRevived = function(){
  this.body.velocity.x -= 300;
};

var Coin = function( game, x, y, key, frame){
  key = 'coins'
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(3);
  this.anchor.setTo(0.5);

  this.animations.add('spin');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onKilled.add(this.onKilled, this);
  this.events.onRevived.add(this.onRevived, this);
};
//
Coin.prototype = Object.create(Phaser.Sprite.prototype);
Coin.prototype.constructor = Coin;
Coin.prototype.onRevived = function(){
  this.body.velocity.x = -200;
  this.animations.play('spin', 8, true);
};

Coin.prototype.onKilled = function(){
  this.animations.frame = 0;
};

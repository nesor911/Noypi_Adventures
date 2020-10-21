var Enemy = function(game, x, y, key, frame){
  key = 'manananggal';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(1.75);
  this.animations.add('fly');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onRevived.add(this.onRevived, this);
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.onRevived = function(){
  this.body.velocity.x -= 450;
  this.animations.play('fly', 8, true);
};

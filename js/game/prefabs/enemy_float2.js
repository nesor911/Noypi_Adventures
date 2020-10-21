var EnemyFloat2 = function(game, x, y, key, frame){
  key = 'ghost';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(2);
  this.anchor.setTo(0.5);
  this.animations.add('float', [2,3,5,6,0,1,8,4,]);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onRevived.add(this.onRevived, this);
};

EnemyFloat2.prototype = Object.create(Phaser.Sprite.prototype);
EnemyFloat2.prototype.constructor = EnemyFloat2;

EnemyFloat2.prototype.onRevived = function(){

  this.body.velocity.y = -100;
  this.animations.play('float', 3, true);
};

var EnemyFloat = function(game, x, y, key, frame){
  key = 'ghost';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(2);
  this.anchor.setTo(0.5);
  this.animations.add('float', [0,1,2,3,4,5,6,7,7]);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onRevived.add(this.onRevived, this);
};

EnemyFloat.prototype = Object.create(Phaser.Sprite.prototype);
EnemyFloat.prototype.constructor = EnemyFloat;

EnemyFloat.prototype.onRevived = function(){

  this.game.add.tween(this).to({y: this.y - 250}, 2500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

  this.body.velocity.x = -100;
  this.animations.play('float', 3, true);
};

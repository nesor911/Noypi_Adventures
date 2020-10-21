var EnemyWalk = function(game, x, y, key, frame){
  key = 'tikbalang';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(2.5);
  this.animations.add('walk', [0, 2, 1]);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = true;

  this.checkWorldBounds = true;
  this.onOutOfBoundsKill = true;

  this.events.onRevived.add(this.onRevived, this);
};

EnemyWalk.prototype = Object.create(Phaser.Sprite.prototype);
EnemyWalk.prototype.constructor = EnemyWalk;

EnemyWalk.prototype.onRevived = function(){
  this.body.velocity.x = -300;
  this.animations.play('walk', 6, true);
};

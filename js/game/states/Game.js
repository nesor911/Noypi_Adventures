Noypi.Game = function(){
  this.coinRate = 1000;
  this.coinTimer = 0;

  this.enemyRate = 2500;
  this.enemyTimer = 0;

  this.bulletTimer = 0;

  this.kill = 0;
  this.score = 0;
  this.coin = 0;
};

Noypi.Game.prototype = {
  create: function(){

    this.game.world.setBounds(0, 0, 3840, this.game.height);
    this.bg1 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg1');
    this.bg2 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2');
    this.bg2.autoScroll(-40, 0);
    this.bg3 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg3');
    this.bg4 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg4');
    this.bg7 = this.game.add.tileSprite(0, this.game.height - 90, 3840, this.game.height, 'bg7');

    this.platform1 = this.game.add.tileSprite(1120, 675, 90, 60, 'platform'),
    this.platform2 = this.game.add.tileSprite(1015, 525, 90, 60, 'platform');
    this.platform3 = this.game.add.tileSprite(1055, 220, 90, 60, 'platform');
    this.platform4 = this.game.add.tileSprite(1275, 170, 90, 60, 'platform');
    this.platform5 = this.game.add.tileSprite(1390, 335, 90, 60, 'platform');
    this.platform6 = this.game.add.tileSprite(1600, 503, 90, 60, 'platform');
    this.platform7 = this.game.add.tileSprite(3040, 675, 90, 60, 'platform'),
    this.platform8 = this.game.add.tileSprite(2935, 525, 90, 60, 'platform');
    this.platform9 = this.game.add.tileSprite(2975, 220, 90, 60, 'platform');
    this.platform10 = this.game.add.tileSprite(3195, 170, 90, 60, 'platform');
    this.platform11 = this.game.add.tileSprite(3310, 450, 90, 60, 'platform');
    this.platform12 = this.game.add.tileSprite(3520, 503, 90, 60, 'platform');

    this.player = this.add.sprite(100, this.game.world.centerY * 1.5, 'player');
    this.player.scale.setTo(1.5);
    this.player.animations.add('run_right', [2,3,2,1]);
    this.player.animations.add('run_left', [5,6,5,4]);
    this.player.animations.add('jump_right', [1]);
    this.player.animations.add('jump_left', [4]);
    this.player.animations.add('idle', [0]);

    this.portal = this.add.sprite(3550, 380, 'portal');
    this.portal.scale.setTo(2);
    this.portal.animations.add('blink');

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 2000;

    this.game.physics.arcade.enableBody(this.bg7);
    this.bg7.body.allowGravity = false;
    this.bg7.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform1);
    this.platform1.body.allowGravity = false;
    this.platform1.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform2);
    this.platform2.body.allowGravity = false;
    this.platform2.body.immovable = true;
    this.game.add.tween(this.platform2).to({y: this.platform2.y - 130}, 1250, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.game.physics.arcade.enableBody(this.platform3);
    this.platform3.body.allowGravity = false;
    this.platform3.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform4);
    this.platform4.body.allowGravity = false;
    this.platform4.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform5);
    this.platform5.body.allowGravity = false;
    this.platform5.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform6);
    this.platform6.body.allowGravity = false;
    this.platform6.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform7);
    this.platform7.body.allowGravity = false;
    this.platform7.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform8);
    this.platform8.body.allowGravity = false;
    this.platform8.body.immovable = true;
    this.game.add.tween(this.platform8).to({y: this.platform8.y - 140}, 1250, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.game.physics.arcade.enableBody(this.platform9);
    this.platform9.body.allowGravity = false;
    this.platform9.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform10);
    this.platform10.body.allowGravity = false;
    this.platform10.body.immovable = true;

    this.game.physics.arcade.enableBody(this.platform11);
    this.platform11.body.allowGravity = false;
    this.platform11.body.immovable = true;

    this.game.add.tween(this.platform11).to({y: this.platform11.y - 150}, 1500, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
    this.game.physics.arcade.enableBody(this.platform12);
    this.platform12.body.allowGravity = false;
    this.platform12.body.immovable = true;

    this.game.physics.arcade.enableBody(this.player);
    this.player.body.allowGravity = true;
    this.player.body.collideWorldBounds = true;
    this.player.anchor.setTo(0.5);
    this.game.camera.follow(this.player);

    this.game.physics.arcade.enableBody(this.portal);
    this.portal.body.allowGravity = false;
    this.portal.body.immovable = true;

    this.arrows = this.input.keyboard.createCursorKeys();

    this.coins = this.game.add.group();
    this.enemies = this.game.add.group();
    this.bullets = this.game.add.group();

    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    this.bullets.createMultiple(1, 'bullet');
    this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetBullet, this);
    this.bullets.setAll('checkWorldBounds', true);

    this.fire = this.input.keyboard.addKey(Phaser.Keyboard.F);
    this.jump = this.input.keyboard.addKey(Phaser.Keyboard.W);

    this.scoreText = this.game.add.bitmapText(this.game.width / 2.25, 10, 'minecraftia', 'Score: 0', 24);
    this.scoreText.fixedToCamera = true;
    this.coinText = this.game.add.bitmapText(10, 10, 'minecraftia', 'Coin: 0', 24);
    this.coinText.fixedToCamera = true;
    this.killText = this.game.add.bitmapText(20,50, 'minecraftia', 'Kill: 0', 24);
    this.killText.fixedToCamera = true;

    this.manananggalSound = this.game.add.audio('manananggal', 0.75);
    this.coinSound = this.game.add.audio('coin');
    this.jumpSound = this.game.add.audio('jump', 0.5);
    this.hurtSound = this.game.add.audio('hurt');
    this.gunSound = this.game.add.audio('gunshot', 0.5);
    this.deathSound = this.game.add.audio('death');
    this.gameMusic = this.game.add.audio('gameMusic');
    this.gameMusic.play('', 0, true);
  },

  update: function() {
    this.portal.animations.play('blink', 6, true);

    if(this.coinTimer < this.game.time.now){
      this.createCoin();
      this.coinTimer = this.game.time.now + this.coinRate;
    }

    if(this.enemyTimer < this.game.time.now){
      this.createEnemy();
      this.enemyTimer = this.game.time.now + this.enemyRate;
    }

    if(this.fire.isDown){
        this.fireBullet();
    }

    this.game.physics.arcade.collide(this.player, this.bg7);
    this.game.physics.arcade.collide(this.player, this.platform1);
    this.game.physics.arcade.collide(this.player, this.platform2);
    this.game.physics.arcade.collide(this.player, this.platform3);
    this.game.physics.arcade.collide(this.player, this.platform4);
    this.game.physics.arcade.collide(this.player, this.platform5);
    this.game.physics.arcade.collide(this.player, this.platform6);
    this.game.physics.arcade.collide(this.player, this.platform7);
    this.game.physics.arcade.collide(this.player, this.platform8);
    this.game.physics.arcade.collide(this.player, this.platform9);
    this.game.physics.arcade.collide(this.player, this.platform10);
    this.game.physics.arcade.collide(this.player, this.platform11);
    this.game.physics.arcade.collide(this.player, this.platform12);
    this.game.physics.arcade.overlap(this.player, this.coins, this.coinHit, null, this);
    this.game.physics.arcade.collide(this.player, this.enemies, this.enemyHit, null, this);
    this.game.physics.arcade.collide(this.enemies, this.bullets, this.enemyShot, null, this);
    this.game.physics.arcade.overlap(this.player, this.portal, this.portalHit, null, this);

    this.playerMove();
  },

  shutdown: function(){
    this.coins.destroy();
    this.enemies.destroy();
    this.bullets.destroy();

    this.score = 0;
    this.coin = 0;
    this.kill = 0;
    this.coinTimer = 0;
    this.enemyTimer = 0;
  },

  createCoin: function(){
    var x = 3840;
    var y = this.game.rnd.integerInRange(150, this.game.height - 150);
    var coin = this.coins.getFirstExists(false);
    if(!coin){
      coin = new Coin(this.game, 0 ,0);
      this.coins.add(coin);
    }
    coin.reset(x, y);
    coin.revive();
  },

  createEnemy: function(){
    var x = 3840;
    var y = this.game.rnd.integerInRange(50, 600);

    var enemy = this.enemies.getFirstExists(false);
    if(!enemy){
      enemy = new Enemy(this.game, 0, 0);
      this.enemies.add(enemy);
    }
    enemy.reset(x, y);
    enemy.revive();
    this.manananggalSound.play();
  },

  coinHit: function(player, coin){
    this.score+=5;
    this.coinSound.play();
    coin.kill();
    this.coin++;
    this.coinText.text = 'Coin: ' + this.coin;

    var dummyCoin = new Coin(this.game, coin.x, coin.y);
    this.game.add.existing(dummyCoin);
    dummyCoin.animations.play('spin', 40, true);

    var scoreTween = this.game.add.tween(dummyCoin).to({x: 10, y: this.game.height / 6}, 300, Phaser.Easing.Linear.NONE, true);
    scoreTween.onComplete.add(function(){
      dummyCoin.destroy();
      this.scoreText.text = 'Score: ' + this.score;
    }, this);
  },

  enemyHit: function(player, enemy){

    if(enemy.body.touching.up){
      enemy.kill();
      this.kill++;
      this.score += 2;
      this.hurtSound.play();
      this.player.body.velocity.y = -625;
      this.scoreText.text = 'Score: ' + this.score;
      this.killText.text='Kill: ' + this.kill;
    } else{
      player.kill();

      this.deathSound.play();
      this.jumpSound.stop();
      this.gameMusic.stop();

      this.bg2.stopScroll();

      this.enemies.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);
      this.enemyTimer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var scoreboard = new Scoreboard(this.game);
      scoreboard.show(this.score);
    }
  },

  fireBullet: function() {
    if(this.game.time.now > this.bulletTimer) {
      var bullet = this.bullets.getFirstExists(false);
      if (bullet){
        bullet.reset(this.player.x, this.player.y);
        this.gunSound.play();
        this.bulletTimer = this.game.time.now + 400;
        if (this.arrows.left.isDown) {
          bullet.body.velocity.x = -6000;
        } else if (this.arrows.right.isDown) {
            bullet.body.velocity.x = 6000;
          }
          else if (this.arrows.up.isDown){
            bullet.body.velocity.y = -6000;
          }
          else if (this.arrows.down.isDown){
            bullet.body.velocity.y = 6000;
          } else {
              bullet.kill();
              this.gunSound.stop();
          }
      }
    }
  },

  resetBullet: function(bullet){
      bullet.kill();
  },

  enemyShot: function(bullet, enemy){
      this.score += 2;
      bullet.kill();
      enemy.kill();
      this.kill++;
      this.scoreText.text = 'Score: ' + this.score;
      this.killText.text='Kill: '+ this.kill;
  },

  portalHit: function(player, portal){
      player.kill();

      this.gameMusic.stop();
      this.jumpSound.stop();
      this.bg2.stopScroll();

      this.enemies.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);
      this.enemyTimer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var gamestats = new Gamestats(this.game);
      gamestats.show(this.score);
  },

  playerMove: function(){
    if (this.arrows.left.isDown){
      this.player.body.velocity.x = -450;
      this.player.animations.play('run_left', 8, true);
      this.bg2.autoScroll(-60, 0);
    } else if(this.arrows.right.isDown){
        this.player.body.velocity.x = 450;
        this.player.animations.play('run_right', 8, true);
    } else {
      this.player.body.velocity.x = 0;
      this.player.animations.play('idle');
    }

    if (this.jump.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -900;
        this.jumpSound.play();
    } else if (!this.player.body.touching.down && this.arrows.right.isDown) {
        this.player.animations.play('jump_right');
    } else if (!this.player.body.touching.down && this.arrows.left.isDown) {
        this.player.animations.play('jump_left');
    }
  }
};

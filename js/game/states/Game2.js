Noypi.Game2 = function(){
  this.coinRate = 1000;
  this.coinTimer = 0;

  this.enemyRate = 2500;
  this.enemyTimer = 0;
  this.enemywalkRate = 5000;
  this.enemywalkTimer = 0;

  this.bulletTimer = 0;

  this.kill = 0;
  this.score = 0;
  this.coin = 0;
};

Noypi.Game2.prototype = {
  create: function(){

    this.game.world.setBounds(0, 0, 3840, this.game.height);

    this.bg2_1 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2.1');
    this.bg2_2 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2.2');
    this.bg2_2.autoScroll(-10, 0)
    this.bg2_3 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2.3');
    this.bg2_3.autoScroll(-5, 0)

    this.web1 = this.game.add.tileSprite(767, 350, 36, 36, 'web');
    this.web1.scale.setTo(2.5);
    this.game.physics.arcade.enableBody(this.web1);
    this.web1.body.allowGravity = false;
    this.web1.body.immovable = true;
    this.game.add.tween(this.web1).to({y: this.web1.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.web2 = this.game.add.tileSprite(1210, 560, 36, 36, 'web');
    this.web2.scale.setTo(2.5);
    this.game.physics.arcade.enableBody(this.web2);
    this.web2.body.allowGravity = false;
    this.web2.body.immovable = true;
    this.game.add.tween(this.web2).to({y: this.web2.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.web3 = this.game.add.tileSprite(1924, 395, 36, 36, 'web');
    this.web3.scale.setTo(1.5);
    this.game.physics.arcade.enableBody(this.web3);
    this.web3.body.allowGravity = false;
    this.web3.body.immovable = true;
    this.game.add.tween(this.web3).to({y: this.web3.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.web4 = this.game.add.tileSprite(2317, 255, 36, 36, 'web');
    this.web4.scale.setTo(2);
    this.game.physics.arcade.enableBody(this.web4);
    this.web4.body.allowGravity = false;
    this.web4.body.immovable = true;
    this.game.add.tween(this.web4).to({y: this.web4.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.web5 = this.game.add.tileSprite(2687, 355, 36, 36, 'web');
    this.web5.scale.setTo(2.5);
    this.game.physics.arcade.enableBody(this.web5);
    this.web5.body.allowGravity = false;
    this.web5.body.immovable = true;
    this.game.add.tween(this.web5).to({y: this.web5.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.web6 = this.game.add.tileSprite(3130, 560, 36, 36, 'web');
    this.web6.scale.setTo(2.5);
    this.game.physics.arcade.enableBody(this.web6);
    this.web6.body.allowGravity = false;
    this.web6.body.immovable = true;
    this.game.add.tween(this.web6).to({y: this.web6.y - 50}, 1000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.portal = this.add.sprite(3457, 170, 'portal');
    this.portal.scale.setTo(2);
    this.portal.animations.add('blink');

    this.bg2_4 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2.4');

    this.player = this.add.sprite(100, this.game.world.centerY * 1.5 , 'player');
    this.player.scale.setTo(1.5);
    this.player.animations.add('run_right', [2,3,2,1]);
    this.player.animations.add('run_left', [5,6,5,4]);
    this.player.animations.add('jump_right', [1]);
    this.player.animations.add('jump_left', [4]);
    this.player.animations.add('idle', [0]);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 2000;

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
    this.enemieswalk = this.game.add.group()
    this.bullets = this.game.add.group();

    this.bg2_6 = this.game.add.tileSprite(0, this.game.height - 45, 3840, this.game.height, 'bg2.6');
    this.game.physics.arcade.enableBody(this.bg2_6);
    this.bg2_6.body.allowGravity = false;
    this.bg2_6.body.immovable = true;
    this.bg2_5 = this.game.add.tileSprite(0, 0, 3840, this.game.height, 'bg2.5');

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
    this.tikbalangSound = this.game.add.audio('tikbalang', 4);
    this.coinSound = this.game.add.audio('coin');
    this.jumpSound = this.game.add.audio('jump', 0.5);
    this.hurtSound = this.game.add.audio('hurt');
    this.gunSound = this.game.add.audio('gunshot', 0.5);
    this.deathSound = this.game.add.audio('death');
    this.gameMusic = this.game.add.audio('gameMusic2');
    this.gameMusic.play('', 0, true);
  },

  update: function() {
    this.portal.animations.play('blink', 8, true);

    if(this.coinTimer < this.game.time.now){
      this.createCoin();
      this.coinTimer = this.game.time.now + this.coinRate;
    }

    if(this.enemyTimer < this.game.time.now){
      this.createEnemy();
      this.enemyTimer = this.game.time.now + this.enemyRate;
    }

    if(this.enemywalkTimer < this.game.time.now){
      this.createEnemywalk();
      this.enemywalkTimer = this.game.time.now + this.enemywalkRate;
    }

    if(this.fire.isDown){
        this.fireBullet();
    }

    this.game.physics.arcade.collide(this.player, this.bg2_6);
    this.game.physics.arcade.overlap(this.player, this.web1, this.web1Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.web2, this.web2Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.web3, this.web3Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.web4, this.web4Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.web5, this.web5Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.web6, this.web6Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.coins, this.coinHit, null, this);
    this.game.physics.arcade.collide(this.player, this.enemies, this.enemyHit, null, this);
    this.game.physics.arcade.collide(this.player, this.enemieswalk, this.enemywalkHit, null, this);
    this.game.physics.arcade.collide(this.bg2_6, this.enemieswalk);
    this.game.physics.arcade.collide(this.enemies, this.bullets, this.enemyShot, null, this);
    this.game.physics.arcade.collide(this.enemieswalk, this.bullets, this.enemywalkShot, null, this);
    this.game.physics.arcade.overlap(this.player, this.portal, this.portalHit, null, this);

    this.playerMove();
  },

  shutdown: function(){
    this.coins.destroy();
    this.enemies.destroy();
    this.enemieswalk.destroy();
    this.bullets.destroy();

    this.score = 0;
    this.coin = 0;
    this.kill = 0;
    this.coinTimer = 0;
    this.enemyTimer = 0;
    this.enemywalkTimer = 0;
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
    var x = 3890;
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

  createEnemywalk: function(){
    var x = 3875;
    var y = (this.game.world.centerY * 1.25) - 48;
    var enemywalk = this.enemieswalk.getFirstExists(false);

    if(!enemywalk){
      enemywalk = new EnemyWalk(this.game, 0, 0);
      this.enemieswalk.add(enemywalk);
    }
    enemywalk.reset(x, y);
    enemywalk.revive();
    this.tikbalangSound.play();
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
      this.tikbalangSound.stop();
      this.gameMusic.stop();

      this.bg2_2.stopScroll();
      this.bg2_3.stopScroll();

      this.enemies.setAll('body.velocity.x', 0);
      this.enemieswalk.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);

      this.enemyTimer = Number.MAX_VALUE;
      this.enemywalkTimer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var scoreboard2 = new Scoreboard2(this.game);
      scoreboard2.show(this.score);
    }
  },

  enemywalkHit: function(player, enemywalk){

    if(enemywalk.body.touching.up){
      this.hurtSound.play();
      this.player.body.velocity.y -= 625;
    } else{
      player.kill();

      this.deathSound.play();
      this.jumpSound.stop();
      this.tikbalangSound.stop();
      this.gameMusic.stop();

      this.bg2_2.stopScroll();
      this.bg2_3.stopScroll();

      this.enemies.setAll('body.velocity.x', 0);
      this.enemieswalk.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);

      this.enemyTimer = Number.MAX_VALUE;
      this.enemywalkTimer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var scoreboard2 = new Scoreboard2(this.game);
      scoreboard2.show(this.score);
    }
  },

  web1Hit: function(player, web1){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
  },

  web2Hit: function(player, web2){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
  },

  web3Hit: function(player, web3){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
  },

  web4Hit: function(player, web4){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
  },

  web5Hit: function(player, web5){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
  },

  web6Hit: function(player, web6){
    this.player.body.velocity.y = -900;
    this.jumpSound.stop();
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

  enemywalkShot: function(bullet, enemywalk){
      this.score += 3;
      this.kill++;
      bullet.kill();
      enemywalk.kill();
      this.scoreText.text = 'Score: ' + this.score;
      this.killText.text='Kill: '+ this.kill;
  },

  portalHit: function(player, portal){
    player.kill();

    this.jumpSound.stop();
    this.tikbalangSound.stop();
    this.gameMusic.stop();

    this.bg2_2.stopScroll();
    this.bg2_3.stopScroll();

    this.enemies.setAll('body.velocity.x', 0);
    this.enemieswalk.setAll('body.velocity.x', 0);
    this.coins.setAll('body.velocity.x', 0);

    this.enemyTimer = Number.MAX_VALUE;
    this.enemywalkTimer = Number.MAX_VALUE;
    this.coinTimer = Number.MAX_VALUE;

    var gamestats2 = new Gamestats2(this.game);
    gamestats2.show(this.score);
  },

  playerMove: function(){
    if (this.arrows.left.isDown){
      this.player.body.velocity.x = -450;
      this.player.animations.play('run_left', 8, true);
    } else if(this.arrows.right.isDown){
        this.player.body.velocity.x = 450;
        this.player.animations.play('run_right', 8, true);
    } else {
      this.player.body.velocity.x = 0;
      this.player.animations.play('idle');
    }

    if (this.jump.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -950;
        this.jumpSound.play();
    } else if (!this.player.body.touching.down && this.arrows.right.isDown) {
        this.player.animations.play('jump_right');
    } else if (!this.player.body.touching.down && this.arrows.left.isDown) {
        this.player.animations.play('jump_left');
    }
  }
};

Noypi.Game3 = function(){
  this.coinRate = 1000;
  this.coinTimer = 0;

  this.enemyfloatRate = 8000;
  this.enemyfloatTimer = 0;
  this.enemyfloat2Rate = 400;
  this.enemyfloat2Timer = 0;

  this.coffinRate = 7500;
  this.coffinTimer = 0;

  this.bulletTimer = 0;

  this.kill = 0;
  this.score = 0;
  this.coin = 0;
};

Noypi.Game3.prototype = {
  create: function(){

    this.game.world.setBounds(0, 0, 3840, this.game.height);

    this.bg3_1 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.1');
    this.bg3_1.anchor.setTo(0, 1);
    this.bg3_2 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.2');
    this.bg3_2.anchor.setTo(0, 1);
    this.bg3_2.autoScroll(-50, 0);
    this.bg3_3 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.3');
    this.bg3_3.anchor.setTo(0, 1);
    this.bg3_3.autoScroll(-5, 0);
    this.bg3_4 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.4');
    this.bg3_4.anchor.setTo(0, 1);
    this.bg3_5 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.5');
    this.bg3_5.anchor.setTo(0, 1);
    this.bg3_6 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.6');
    this.bg3_6.anchor.setTo(0, 1);

    this.bg3_8 = this.game.add.tileSprite(0, this.game.height, 3840, 1080, 'bg3.8');
    this.bg3_8.anchor.setTo(0, 1);
    this.game.add.tween(this.bg3_8).to({y: this.bg3_8.y - 100}, 2000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

    this.portal = this.add.sprite(3150, -500, 'portal');
    this.portal.scale.setTo(3);
    this.portal.animations.add('blink');
    this.game.add.tween(this.portal).to({y: this.portal.y + 600}, 12500, Phaser.Easing.Linear.NONE, true, 0, Infinity, false);

    this.enemiesfloat2= this.game.add.group();

    this.bg3_9 = this.game.add.tileSprite(0, this.game.height - 105, 3840, 1080, 'bg3.9');

    this.player = this.add.sprite(75, this.game.world.centerY * 1.5, 'player');
    this.player.scale.setTo(1.75);
    this.player.animations.add('run_right', [2,3,2,1]);
    this.player.animations.add('run_left', [5,6,5,4]);
    this.player.animations.add('jump_right', [1]);
    this.player.animations.add('jump_left', [4]);
    this.player.animations.add('idle', [0]);

    this.bg3_7 = this.game.add.tileSprite(this.game.width, this.game.height, 1920, 1080, 'bg3.7');
    this.bg3_7.anchor.setTo(0, 1);

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

    this.game.physics.arcade.enableBody(this.bg3_9);
    this.bg3_9.body.allowGravity = false;
    this.bg3_9.body.immovable = true;

    this.arrows = this.input.keyboard.createCursorKeys();

    this.coins = this.game.add.group();
    this.enemiesfloat= this.game.add.group();
    this.coffins = this.game.add.group();
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

    this.ghostSound = this.game.add.audio('ghost');
    this.coinSound = this.game.add.audio('coin');
    this.jumpSound = this.game.add.audio('jump', 0.5);
    this.hurtSound = this.game.add.audio('hurt');
    this.gunSound = this.game.add.audio('gunshot', 0.5);
    this.deathSound = this.game.add.audio('death');
    this.gameMusic = this.game.add.audio('gameMusic3');
    this.gameMusic.play('', 0, true);
  },

  update: function() {
    this.portal.animations.play('blink', 12, true);

    if(this.coinTimer < this.game.time.now){
      this.createCoin();
      this.coinTimer = this.game.time.now + this.coinRate;
    }

    if(this.enemyfloatTimer < this.game.time.now){
      this.createEnemyfloat();
      this.enemyfloatTimer = this.game.time.now + this.enemyfloatRate;
    }

    if(this.enemyfloat2Timer < this.game.time.now){
      this.createEnemyfloat2();
      this.enemyfloat2Timer = this.game.time.now + this.enemyfloatRate;
    }

    if(this.coffinTimer < this.game.time.now){
      this.createCoffin();
      this.coffinTimer = this.game.time.now + this.coffinRate;
    }

    if(this.fire.isDown){
        this.fireBullet();
    }

    this.game.physics.arcade.collide(this.player, this.bg3_9);
    this.game.physics.arcade.collide(this.player, this.coffins, this.coffinHit, null, this);
    this.game.physics.arcade.overlap(this.player, this.coins, this.coinHit, null, this);
    this.game.physics.arcade.collide(this.player, this.enemiesfloat, this.enemyfloatHit, null, this);
    this.game.physics.arcade.collide(this.player, this.enemiesfloat2, this.enemyfloat2Hit, null, this);
    this.game.physics.arcade.overlap(this.player, this.portal, this.portalHit, null, this);

    this.playerMove();
  },

  shutdown: function(){
    this.coins.destroy();
    this.enemiesfloat.destroy();
    this.enemiesfloat2.destroy();
    this.coffins.destroy();
    this.bullets.destroy();

    this.score = 0;
    this.coin = 0;
    this.kill = 0;
    this.coinTimer = 0;
    this.enemyfloatTimer = 0;
    this.enemyfloat2Timer = 0
    this.coffinTimer = 0;
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

  createEnemyfloat: function(){
    var x = 3840;
    var y = this.game.rnd.integerInRange(250, this.game.height - 250);

    var enemyfloat = this.enemiesfloat.getFirstExists(false);
    if(!enemyfloat){
      enemyfloat = new EnemyFloat(this.game, 0, 0);
      this.enemiesfloat.add(enemyfloat);
    }
    enemyfloat.reset(x, y);
    enemyfloat.revive();
  },

  createEnemyfloat2: function(){
    var x = this.game.rnd.integerInRange(400, 3800);
    var y = this.game.height;

    var enemyfloat2 = this.enemiesfloat2.getFirstExists(false);
    if(!enemyfloat2){
      enemyfloat2 = new EnemyFloat2(this.game, 0, 0);
      this.enemiesfloat2.add(enemyfloat2);
    }
    enemyfloat2.reset(x, y);
    enemyfloat2.revive();
  },

  createCoffin: function(){
    var x = 3840;
    var y = this.game.height / 1.6;

    var coffin = this.coffins.getFirstExists(false);
    if(!coffin){
      coffin = new Coffin(this.game, 0, 0);
      this.coffins.add(coffin);
    }
    coffin.reset(x, y,);
    coffin.revive();
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

  enemyfloatHit: function(player, enemyfloat){
    if(enemyfloat.body.touching.up){
      enemyfloat.kill();
      this.kill++;
      this.score += 10;
      this.ghostSound.play();
      this.player.body.velocity.y -= 625;
      this.scoreText.text = 'Score: ' + this.score;
      this.killText.text='Kill: ' + this.kill;
    } else{
      player.kill();

      this.deathSound.play();
      this.gameMusic.stop();

      this.bg3_2.stopScroll();
      this.bg3_3.stopScroll();

      this.enemiesfloat.setAll('body.velocity.x', 0);
      this.enemiesfloat2.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);

      this.enemyfloatTimer = Number.MAX_VALUE;
      this.enemyfloat2Timer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var scoreboard3 = new Scoreboard3(this.game);
      scoreboard3.show(this.score);
    }
  },

  enemyfloat2Hit: function(player, enemyfloat2){
    if(enemyfloat2.body.touching.up){
      enemyfloat2.kill();
      this.kill++;
      this.score += 10;
      this.ghostSound.play();
      this.player.body.velocity.y -= 625;
      this.scoreText.text = 'Score: ' + this.score;
      this.killText.text='Kill: ' + this.kill;
    } else{
      player.kill();

      this.deathSound.play();
      this.gameMusic.stop();

      this.bg3_2.stopScroll();
      this.bg3_3.stopScroll();

      this.enemiesfloat.setAll('body.velocity.x', 0);
      this.enemiesfloat2.setAll('body.velocity.x', 0);
      this.coins.setAll('body.velocity.x', 0);

      this.enemyfloatTimer = Number.MAX_VALUE;
      this.enemyfloat2Timer = Number.MAX_VALUE;
      this.coinTimer = Number.MAX_VALUE;

      var scoreboard3 = new Scoreboard3(this.game);
      scoreboard3.show(this.score);
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

  portalHit: function(player, portal){
    player.kill();

    this.jumpSound.stop();
    this.gameMusic.stop();

    this.bg3_2.stopScroll();
    this.bg3_3.stopScroll();

    this.enemiesfloat.setAll('body.velocity.x', 0);
    this.enemiesfloat2.setAll('body.velocity.x', 0);
    this.coins.setAll('body.velocity.x', 0);

    this.enemyfloatTimer = Number.MAX_VALUE;
    this.enemyfloat2Timer = Number.MAX_VALUE;
    this.coinTimer = Number.MAX_VALUE;

    var gamestats3 = new Gamestats3(this.game);
    gamestats3.show(this.score);
  },

  playerMove: function(){
    if (this.arrows.left.isDown){
      this.player.body.velocity.x = -475;
      this.player.animations.play('run_left', 8, true);
    } else if(this.arrows.right.isDown){
        this.player.body.velocity.x = 475;
        this.player.animations.play('run_right', 8, true);
    } else {
      this.player.body.velocity.x = 0;
      this.player.animations.play('idle');
    }

    if (this.jump.isDown && this.player.body.touching.down) {
        this.player.body.velocity.y = -1000;
        this.jumpSound.play();
    } else if (!this.player.body.touching.down && this.arrows.right.isDown) {
        this.player.animations.play('jump_right');
    } else if (!this.player.body.touching.down && this.arrows.left.isDown) {
        this.player.animations.play('jump_left');
    }
  }
};

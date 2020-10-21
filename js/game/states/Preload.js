Noypi.Preload = function() {
  this.ready = false;
};

Noypi.Preload.prototype = {
  preload: function(){

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 250, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('bg1', 'assets/images/stage1/1.png');
    this.load.image('bg2', 'assets/images/stage1/2.png');
    this.load.image('bg3', 'assets/images/stage1/3.png');
    this.load.image('bg4', 'assets/images/stage1/4.png');
    this.load.image('bg5', 'assets/images/stage1/5.png');
    this.load.image('bg6', 'assets/images/stage1/6.png');
    this.load.image('bg7', 'assets/images/stage1/7.png');
    this.load.image('platform', 'assets/images/stage1/platform.png');

    this.load.image('bg2.1', 'assets/images/stage2/1.png');
    this.load.image('bg2.2', 'assets/images/stage2/2.png');
    this.load.image('bg2.3', 'assets/images/stage2/3.png');
    this.load.image('bg2.4', 'assets/images/stage2/4.png');
    this.load.image('bg2.5', 'assets/images/stage2/5.png');
    this.load.image('bg2.6', 'assets/images/stage2/6.png');

    this.load.image('bg3.1', 'assets/images/stage3/1.png');
    this.load.image('bg3.2', 'assets/images/stage3/2.png');
    this.load.image('bg3.3', 'assets/images/stage3/3.png');
    this.load.image('bg3.4', 'assets/images/stage3/4.png');
    this.load.image('bg3.5', 'assets/images/stage3/5.png');
    this.load.image('bg3.6', 'assets/images/stage3/6.png');
    this.load.image('bg3.7', 'assets/images/stage3/7.png');
    this.load.image('bg3.8', 'assets/images/stage3/8.png');
    this.load.image('bg3.9', 'assets/images/stage3/9.png');
    this.load.image('coffin', 'assets/images/coffin.png', 607, 197);

    this.load.spritesheet('coins', 'assets/images/coins.png ', 12, 13, 6);
    this.load.spritesheet('player', 'assets/images/NoyPilegro.png', 64, 64, 7);
    this.load.spritesheet('manananggal', 'assets/images/manananggal.png', 86, 66, 2);
    this.load.spritesheet('ghost', 'assets/images/ghost.png', 76, 128, 8);
    this.load.spritesheet('tikbalang', 'assets/images/tikbalang.png', 42, 69, 3);
    this.load.spritesheet('bullet', 'assets/images/bullet.png', 10, 10);
    this.load.spritesheet('web', 'assets/images/web.png', 36, 36);
    this.load.spritesheet('portal', 'assets/images/portal.png', 17, 60, 2);
    this.load.spritesheet('gobutton', 'assets/images/go.png', 316, 175);

    this.load.audio('gameMusic', ['assets/audio/Adventure.mp3' , 'assets/audio/Adventure.ogg']);
    this.load.audio('gameMusic2', ['assets/audio/DarkRoomsandScaryThings.mp3' , 'assets/audio/DarkRoomsandScaryThings.ogg']);
    this.load.audio('gameMusic3', ['assets/audio/AdventureHO2.mp3' , 'assets/audio/AdventureHO2.ogg']);
    this.load.audio('tikbalang', ['assets/audio/tikbalang.mp3' , 'assets/audio/tikbalang.ogg' ]);
    this.load.audio('manananggal', 'assets/audio/manananggal.wav');
    this.load.audio('ghost', 'assets/audio/ghost.wav');
    this.load.audio('jump', 'assets/audio/jump.wav');
    this.load.audio('coin', 'assets/audio/coin.wav');
    this.load.audio('hurt', 'assets/audio/hurt.wav');
    this.load.audio('gunshot', 'assets/audio/GunShot.wav');
    this.load.audio('death', 'assets/audio/death.wav');

    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');
    this.load.bitmapFont('shortStack', 'assets/fonts/shortStack/shortStack.png', 'assets/fonts/shortStack/shortStack.xml');

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },

  create: function(){
    this.preloadBar.cropEnabled = false;
  },

  update: function(){
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true){
      this.state.start('MainMenu')
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

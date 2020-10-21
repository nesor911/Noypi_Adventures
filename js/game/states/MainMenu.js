Noypi.MainMenu = function(){};

Noypi.MainMenu.prototype = {
  create: function(){

    this.bg1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg1');
    this.bg2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2');
    this.bg2.autoScroll(-100, 0);
    this.bg3 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3');
    this.bg3.autoScroll(-30, 0);
    this.bg4 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg4');
    this.bg4.autoScroll(-40, 0);
    this.bg5 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg5');
    this.bg5.autoScroll(-50, 0);

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);
    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'tap to start', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2 + this.splash.height / 2;

    this.gameMusic = this.game.add.audio('gameMusic');
    this.gameMusic.play('', 0, true);
  },

  update: function(){
    if(this.game.input.activePointer.justPressed()){
      this.gameMusic.stop();
      this.game.state.start('Intro');
    }
  }
};

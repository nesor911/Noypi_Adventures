Noypi.Intro2 = function(){};

Noypi.Intro2 .prototype = {
  create: function(){

    this.bg1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2.1');
    this.bg2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2.2');
    this.bg2.autoScroll(-15, 0);
    this.bg3 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2.3');
    this.bg3.autoScroll(-5, 0);
    this.bg4 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2.4');
    this.bg5 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2.5');

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Transported in a dark forest in search of a path,', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 12;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Noy is now trapped in the Forest of the Elements.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Hurry and find a way out!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 4;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Hint:', 64);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.7;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Manananggal can be killed by bullets or jumping on', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.1;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'their head (will bounce on the head).', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.8;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Tikbalang are durable creatures, killing it with a gun', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.575;
    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'is easy but stepping on it is just like horse riding.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.4;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'TAP to play!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.2;
  },

  update: function(){
    if(this.game.input.activePointer.justPressed()){
      this.game.state.start('Game2');
    }
  }
};

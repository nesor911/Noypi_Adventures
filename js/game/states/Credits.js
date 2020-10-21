Noypi.Credits = function(){};

Noypi.Credits .prototype = {
  create: function(){

    this.bg1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.1');
    this.bg2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.2');
    this.bg2.autoScroll(-40, 0);
    this.bg3 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.3');
    this.bg3.autoScroll(-5, 0);
    this.bg4 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.4');
    this.bg5 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.5');
    this.bg6 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.6');
    this.bg7 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.7');
    this.bg8 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3.8');

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Thank you for playing!', 48);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 12;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'This game was made for study purposes.', 40);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 4;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Thank you to OpenGameArt.Org especially', 40);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.7;
    
    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Snabischfor the Halloween Themed Parallax,', 40);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.2;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Background it is perfect for the game and saved', 40);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.85;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'me so much time for adding features.', 40);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Visit this: opengameart.org and pixelgameart.org', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.35;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'tap to go back to menu', 32);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.175;
  },

  update: function(){
    if(this.game.input.activePointer.justPressed()){
      this.game.state.start('Boot');
    }
  }
};

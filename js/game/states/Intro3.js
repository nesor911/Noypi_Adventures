Noypi.Intro3 = function(){};

Noypi.Intro3 .prototype = {
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

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Noy is out of the forest and now is in the cemetery,', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 12;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'a little further ahead is the Town Church.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Home is near, go fight and live to tell the story!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 4;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Hint:', 64);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.7;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Ghosts are scary and invincible, but because Noy', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.1;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'has a natural affiliation with ghosts, he can', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.8;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'touch them, but only on their heads.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.575;
    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Kill ghosts by jumping on top of them.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.4;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'TAP to play!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.175;
  },

  update: function(){
    if(this.game.input.activePointer.justPressed()){
      this.game.state.start('Game3');
    }
  }
};

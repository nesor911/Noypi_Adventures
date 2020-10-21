Noypi.Intro = function(){};

Noypi.Intro .prototype = {
  create: function(){

    this.bg1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg1');
    this.bg2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg2');
    this.bg2.autoScroll(-50, 0);
    this.bg3 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg3');
    this.bg4 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg4');
    this.bg5 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg5');
    this.bg6 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'bg6');

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Instructions', 64);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 15;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Use left, right and up arrow keys for mobilty', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'along with F for Firing. Use W to jump.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 4.5;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Shoot or jump on enemies to kill them,', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 3.6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'but not all attacks are effective to all enemies.', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 3;

    this.startText = this.game.add.bitmapText(0, 0, 'shortStack', 'Story', 64);
    this.startText.tint = 0x4ebef7;
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 2.25;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'Your sense of direction has been tricked,', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.8;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'find your way back home and live!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.6;

    this.startText = this.game.add.bitmapText(0, 0, 'minecraftia', 'TAP to play!', 32);
    this.startText.x = this.game.width / 2 - this.startText.textWidth / 2;
    this.startText.y = this.game.height / 1.25;
  },

  update: function(){
    if(this.game.input.activePointer.justPressed()){
      this.game.state.start('Game');
    }
  }
};

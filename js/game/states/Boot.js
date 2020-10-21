var Noypi = function () {};

Noypi.Boot = function() {};
Noypi.Boot.prototype = {

  preload: function() {
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },

  create: function(){
    this.game.stage.backgroundColor = '#fff';
    this.input.maxPointers = 1;

    if(this.game.device.desktop){
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    } else{
      //Samge goes for mobile settings
      //In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 568;
      this.scale.minHeight = 600;
      this.scale.maxWidth = 2048;
      this.scale.maxHeight = 1536;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.setScreenSize(true);
    }
    this.state.start('Preloader');
  }
};

var Gamestats3 = function(game){
  Phaser.Group.call(this, game);
};

Gamestats3.prototype = Object.create(Phaser.Group.prototype);
Gamestats3.prototype.constructor = Gamestats3;

Gamestats3.prototype.show = function(score){

  var bmd, background, gameoverText, scoreText, highScoreText, newHighScoreText, playbutton;

  bmd = this.game.add.bitmapData(this.game.width, this.game.height);
  bmd.ctx.fillStyle = '#000';
  bmd.ctx.fillRect(0, 0, this.game.width, this.game.height);

  background = this.game.add.sprite(0, 0, bmd);
  background.alpha = 0.75;
  background.fixedToCamera = true;
  this.add(background);

  var isNewHighScore = false;
  var highscore = localStorage.getItem('highscore'); //localStorage.removeItem('highscore');
  if(!highscore || highscore < score){
    isNewHighScore = true;
    highscore = score;
    localStorage.setItem('highscore', highscore);
  }

  this.y = this.game.height;

  gameoverText = this.game.add.bitmapText(0, this.game.height / 3, 'minecraftia', 'You have done well!', 36);
  gameoverText.x = this.game.width/2 - (gameoverText.textWidth / 2);
  gameoverText.tint = 0x006de1;
  gameoverText.fixedToCamera = true;
  this.add(gameoverText);

  scoreText = this.game.add.bitmapText(0, this.game.height / 2.2, 'minecraftia', 'Your Score: ' + score, 24);
  scoreText.x = this.game.width/2 - (scoreText.textWidth / 2);
  scoreText.fixedToCamera = true;
  this.add(scoreText);

  highScoreText = this.game.add.bitmapText(0, this.game.height / 2, 'minecraftia', 'High Score: ' + highscore, 24);
  highScoreText.x = this.game.width/2 - (highScoreText.textWidth / 2);
  highScoreText.fixedToCamera = true;
  this.add(highScoreText);

  gobutton = this.game.add.button(this.game.width / 2, this.game.height / 1.5, 'gobutton', this.onClick, this, 1, 0);
  gobutton.scale.setTo(0.5);
  gobutton.anchor.setTo(0.5);
  gobutton.fixedToCamera = true;
  this.add(gobutton);

  if(isNewHighScore){
    newHighScoreText = this.game.add.bitmapText(0, this.game.height / 2.5, 'minecraftia', 'New High Score!', 12);
    newHighScoreText.tint = 0x4ebef7;
    newHighScoreText.x = gameoverText.x + gameoverText.textWidth + 40;
    newHighScoreText.angle = 45;
    newHighScoreText.fixedToCamera = true;
    this.add(newHighScoreText);
  }

  this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
};

Gamestats3.prototype.onClick = function(){
  this.game.state.start('Credits');
};

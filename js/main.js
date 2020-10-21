var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', Noypi.Boot);
game.state.add('Preloader', Noypi.Preload);
game.state.add('MainMenu', Noypi.MainMenu);

game.state.add('Intro', Noypi.Intro);
game.state.add('Game', Noypi.Game);
game.state.add('Intro2', Noypi.Intro2);
game.state.add('Game2', Noypi.Game2);
game.state.add('Intro3', Noypi.Intro3);
game.state.add('Game3', Noypi.Game3);

game.state.add('Credits', Noypi.Credits);

game.state.start('Boot');

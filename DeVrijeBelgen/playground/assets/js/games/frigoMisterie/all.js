var config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: '#000000',
    //parent: 'phaser-example',
    scene: [ Menu, Game, GameOver ]
};

var scaleRatio = window.devicePixelRatio / 3;

var game = new Phaser.Game(config);

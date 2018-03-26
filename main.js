window.onload = function() {

        //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
        //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
        //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, '', { preload: preload, create: create });
    var emitter;
    function preload () {

        game.load.image('logo', 'logo.png');
        game.load.image('haskell', 'haskell.png');
        game.load.audio('musa', 'music.mp3');


    }

    function create () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        var backGround = game.add.sprite(-250, -120, 'haskell');
        emitter = game.add.emitter(game.world.centerX, 200);
        emitter.makeParticles('logo');

        emitter.setXSpeed(-200,200);
        emitter.setYSpeed(-150, -250);
        emitter.bringToTop = true;
        emitter.setAlpha(0.1, 1, 500);
        emitter.setScale(-2, 2, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);
        emitter.gravity = 300;
        emitter.start(false, 5000, 700, 50);

        let text = "Moi! \n Täs ois tää demo.";
        let style = { font: "88px Comic Sans", fill: "#FFFFFF", align: "center" };
        let texti = game.add.text(game.world.centerX-200, 0, text, style);

        game.physics.arcade.enable([texti]);
        
        texti.body.velocity.setTo(100,100);
        texti.body.collideWorldBounds = true;
        texti.body.bounce.set(1);

        
        logo.anchor.setTo(0.5, 0.5);
        music = game.add.audio('musa');
        music.play();
    }

};
import MainScene from 'MainScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainScene],
};

const game = new Phaser.Game(config);
 export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
       this.load.image('TitleBG', '
    }

    create() {
        // Create objects here
    }
}

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
        this.load.image('TitleBG', 'Dino Fishing Title screen/Title background.png');
        this.load.image('DinoFishing', 'Dino Fishing Title screen/Dino fishing title.png');
        this.load.image('Play', 'Dino Fishing Title screen/Play button.png');
        this.load.image('Option', 'Dino Fishing Title screen/Option button.png');
    }

    create() {
        this.add.image(400, 300, 'TitleBG');
        this.add.image(192, 69, 'DinoFishing');
        this.add.image(195, 181, 'Play');
        this.add.image(-75, -44, 'Option');

        const logo = document.querySelector('#Play');

        function hover() {
            console.log('Hover function excuted!');
        }
        window.addEventListener('DOMContentLoaded', () => {
    }
}

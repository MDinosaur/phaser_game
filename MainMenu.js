export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
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
        
        const playButton = this.add.image(192, 40, 'Play').setInteractive();

        this.tweens.add({
            targets: playButton, 
            y: 320, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        playButton.on('pointerdown', () => {
            console.log('Play button clicked!');
        });
        
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1600,
    scene: [MainMenu],
};
 const game = new Phaser.Game(config);

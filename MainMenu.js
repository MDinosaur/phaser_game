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
        this.add.image(800, 400, 'TitleBG').setScale(0.8);
        this.add.image(800, 400, 'DinoFishing').setScale(0.7);
        
        const playButton = this.add.image(800, 600, 'Play').setScale(0.7).setInteractive();

        this.tweens.add({
            targets: playButton, 
            y: 580, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        playButton.on('pointerdown', (pointer) => {
        if (pointer.isOver) {
            console.log('Play button clicked!');
        }
        });
        this.scale.refresh();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [MainMenu],
};
 const game = new Phaser.Game(config);

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
        const TitleBG = this.add.image(800, 400, 'TitleBG').setScale(0.7);
            console.log(`TitleBG: x=${TitleBG.x}, y=${TitleBG.y}`);
        const DinoFishing = this.add.image(800, 250, 'DinoFishing').setScale(0.6);
            console.log(`Dino Fishing: x=${DinoFishing.x}, y=${DinoFishing.y}`);
        
        
        const playButton = this.add.image(800, 500, 'Play').setScale(0.6).setInteractive();

        this.tweens.add({
            targets: playButton, 
            y: 520, 
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

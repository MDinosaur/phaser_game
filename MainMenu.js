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
        const TitleBG = this.add.image(800, 400, 'TitleBG').setScale(0.6);
            console.log(`TitleBG: x=${TitleBG.x}, y=${TitleBG.y}`);
        const DinoFishing = this.add.image(800, 350, 'DinoFishing').setScale(0.6).setInteractive();
            console.log(`Dino Fishing: x=${DinoFishing.x}, y=${DinoFishing.y}`);

        this.tweens.add({
            targets: DinoFishing, 
            y: 370, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        
        const playButton = this.add.image(800, 380, 'Play').setScale(0.6).setInteractive();

        this.tweens.add({
            targets: playButton, 
            y: 400, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        playButton.on('pointerdown', (pointer) => {
            console.log('Play button clicked!');
            console.log(`Pointer coordinates: x=${pointer.x}, y=${pointer.y}`);
            console.log(pointer);
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

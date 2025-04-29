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
        const TitleBG = this.add.image(720, 400, 'TitleBG').setScale(0.65);
            console.log(`TitleBG: x=${TitleBG.x}, y=${TitleBG.y}`);
        const DinoFishing = this.add.image(720, 350, 'DinoFishing').setScale(0.6).setInteractive();
            console.log(`Dino Fishing: x=${DinoFishing.x}, y=${DinoFishing.y}`);

        this.tweens.add({
            targets: DinoFishing, 
            y: 370, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        
        const playButton = this.add.image(720, 365, 'Play').setScale(0.6).setInteractive();

        this.tweens.add({
            targets: playButton, 
            y: 385, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        playButton.setInteractive({
    hitArea: new Phaser.Geom.Rectangle(320, 400, 300, 100),
    hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    useHandCursor: false
        });
        this.input.on('pointermove', (pointer) => {
    console.log(`Pointer moving at: x=${pointer.x}, y=${pointer.y}`);
});

this.input.on('pointerdown', (pointer) => {
    console.log(`Global pointer click at: x=${pointer.x}, y=${pointer.y}`);
    if (!Phaser.Geom.Rectangle.Contains(playButton.input.hitArea, pointer.x, pointer.y)) {
        console.log('Pointer is outside the hit area!');
    }
});

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [MainMenu],
};
 const game = new Phaser.Game(config);

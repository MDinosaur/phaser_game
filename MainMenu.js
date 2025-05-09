import Cabin from './Cabin.js';
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    preload() {
        this.load.image('TitleBG', 'Dino Fishing Title screen/Title background.png');
        this.load.image('DinoFishing', 'Dino Fishing Title screen/DinoFishingTitle.png');
        this.load.image('Play', 'Dino Fishing Title screen/Play button.png');
        this.load.image('Option', 'Dino Fishing Title screen/Option button.png');
         
    }

    create() {
        const TitleBG = this.add.image(720, 400, 'TitleBG').setScale(0.65);
            console.log(`TitleBG: x=${TitleBG.x}, y=${TitleBG.y}`);
        const DinoFishing = this.add.image(722, 350, 'DinoFishing').setScale(0.6).setInteractive();
            console.log(`Dino Fishing: x=${DinoFishing.x}, y=${DinoFishing.y}`);

        this.tweens.add({
            targets: DinoFishing, 
            y: 370, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
        
        const playButton = this.add.image(720, 430, 'Play').setScale(0.6).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 525, 160),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
        });
        console.log(`Play Button: x=${playButton.x}, y=${playButton.y}`);
        
        this.tweens.add({
            targets: playButton, 
            y: 450, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        
playButton.on('pointerdown', (pointer) => {
    console.log('Play button clicked at: ', pointer.x, pointer.y); 
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
    this.scene.start('Cabin'); 
            });
});

        const optionButton = this.add.image(720, 580, 'Option').setScale(0.6).setInteractive({
            hitArea: new Phaser.Geom.Rectangle(0, 0, 525, 160),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
        });
        console.log(`Option Button: x=${optionButton.x}, y=${optionButton.y}`);
        
        this.tweens.add({
            targets: optionButton, 
            y: 600, 
            duration: 1000,
            yoyo: true, 
            repeat: -1, 
            ease: 'Sine.easeInOut' 
        });
        optionButton.on('pointerdown', (pointer) => {
    console.log('Option button clicked at: ', pointer.x, pointer.y); 
        this.showNotification("Options are irrevlant :3");
    });
}
showNotification(message) {
    
    const bg = this.add.rectangle(720, 400, 600, 200, 0x000000, 0.7);
    const text = this.add.text(720, 400, message, { 
        font: '32px Arial', 
        fill: '#ffffff', 
        align: 'center' 
    }).setOrigin(0.5);

    this.time.delayedCall(2000, () => {
        bg.destroy();
        text.destroy();
        });
    }

}





const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [MainMenu, Cabin]
};
 const game = new Phaser.Game(config);

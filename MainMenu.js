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
        
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1600,
    scene: [MainMenu],
};
 const game = new Phaser.Game(config);

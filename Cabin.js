//placeholder for prolouge
//import Market from './Market'; import Town from './Town';
export default class Cabin extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin' });
    }

   preload (){

       this.load.image('CabinBG', 'Dino Fishing Cabin/Cabin.png');
       this.load.image('Note', 'Dino Fishing Cabin/Note.png');
// this.load.image('UI', 'assets'); this.load.image('Inventory', 'assets'); this.load.image('Journal', 'assets');
     
   }

   create(){

       const CabinBG = this.add.image(720, 400, 'CabinBG').setScale(0.65); 
           console.log(`CabinBG: x=${CabinBG.x}, y=${CabinBG.y}`);
 // const placeholder = this.add.image(-,0 'placeholder').setScale(0.6);
    }

   update (){
//probably have constant updates to check if the player has been through the prolouge (taking the note offf the wall)
   }
}

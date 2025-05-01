//placeholder for prolouge
//import Market from './Market'; import Town from './Town';
export default class Cabin extends Phaser.Scene {
    constructor() {
        super({ key: 'Cabin' });
    }

   preload (){

       this.load.image('CabinBG', 'Dino Fishing Cabin/Cabin.png');
       this.load.image('Note', 'Dino Fishing Cabin/Note.png');
       this.load.image('UI_Closed', 'Dino Fishing Cabin/Interface_closed.png');
       //this.load.image('InventoryOpened', 'Dino Fishing Cabin/Inventory_opened.png');
       this.load.image('JournalOpened', 'Dino Fishing Cabin/Journal_opened.png');
       this.load.image('JournalIcon', 'Dino Fishing Cabin/Journalicon.png');
       this.load.image('InventoryIcon', 'Dino Fishing Cabin/Inventoryicon.png');
// this.load.image('UI', 'assets'); this.load.image('Inventory', 'assets'); this.load.image('Journal', 'assets');
     
   }

   create(){

       const CabinBG = this.add.image(720, 400, 'CabinBG').setScale(0.65); 
           console.log(`CabinBG: x=${CabinBG.x}, y=${CabinBG.y}`);
       const Note = this.add.image(570, 295, 'Note').setScale(0.6);
           console.log(`Note: x=${Note.x}, y=${Note.y}`);
       const UI_Closed = this.add.image(720, 400, 'UI_Closed').setScale(0.62);
           console.log(`UI_Closed: x=${UI_Closed.x}, y=${UI_Closed.y}`);
       //const Inventory = this.add.image(720, 400, 'Inventory').setScale(0.65); const Journal = this.add.iamge(720, 400, 'Journal').setScale(0.65);
       
 // const placeholder = this.add.image(-,0 'placeholder').setScale(0.6);
       const JournalIcon = this.add.image(1128, 524, 'JournalIcon').setScale(0.6).setInteractive({
           hitArea: new Phaser.Geom.Rectangle(0, 0, 134, 116),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
        });
       console.log(`JournalIcon: x=${JournalIcon.x}, y=${JournalIcon.y}`);

       JournalIcon.on('pointerdown', (pointer) => {
    console.log('Journal button clicked at: ', pointer.x, pointer.y); 
       });
       
    }

   update (){
//probably have constant updates to check if the player has been through the prolouge (taking the note offf the wall)
   }
}

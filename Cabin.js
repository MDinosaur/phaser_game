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
       this.load.image('NormalEel', 'Dino Fishing Cabin/Normal Eel Spirite.png')
// this.load.image('UI', 'assets'); this.load.image('Inventory', 'assets'); this.load.image('Journal', 'assets');
       //this.load.text('Alien-Dictionary', 'assets'); the startin global set up for the dictonary
     
   }

   create(){

//Translation set-up
       //const WordsToTranslate = []
       //const DictionaryText = this.cache.text.get('Alien-Dictionary')
       //const lines = DictionaryText.split('\n');
       //let Translations = {}
       //WordsToTranslate.forEach((word) => {
           //let Translation = this.checkTranslation(word, lines);
               //if (Translation) {
                   //translations[words] = Translation 
                   //alert(word +'Translation:'+ Translation);
               //} else {
                   //let userTranslation = prompt(`Enter translation for '${word}' (alien language):`);
                   //if (userTranslation) {
                       //translations[words] = userTranslation;
                       //alert(`You translated '${word}' to: ${userTranslation}`);
               // } else {
                   //alert(`No translation entered for '${word}'.`);} 
       //}
    //});

       //localStorage.setItem('Translations', JSON.stringify(translations));
       
       const CabinBG = this.add.image(720, 400, 'CabinBG').setScale(0.65); 
           console.log(`CabinBG: x=${CabinBG.x}, y=${CabinBG.y}`);
       const Note = this.add.image(570, 295, 'Note').setScale(0.6).setInteractive({
           hitArea: new Phaser.Geom.Rectangle(0, 0, 57, 76),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
       });
       console.log(`Note: x=${Note.x}, y=${Note.y}`);
       
           Note.on('pointerdown', (pointer) => {
    console.log('Note button clicked at: ', pointer.x, pointer.y); 
               Note.visible = false;
               Note.disableInteractive();
               
               // showDialogue(message) 
    //const dialogueBg = this.add.rectangle(720, 400, 600, 200, 0x000000, 0.7)
    //const dialogueText = this.add.text(720, 400, 'Note info', { 
        //font: '32px Arial', 
        //fill: '#ffffff', 
       // align: 'center' 
    //}).setOrigin(0.5);
               //this.input.once('pointerdown', () => {
        //dialougeBg.destroy();
        //dialogueText.destroy();
    //});
});

   
       
       const UI_Closed = this.add.image(720, 400, 'UI_Closed').setScale(0.62);
           console.log(`UI_Closed: x=${UI_Closed.x}, y=${UI_Closed.y}`);
       //const Inventory = this.add.image(720, 400, 'Inventory').setScale(0.65); const Journal = this.add.iamge(720, 400, 'Journal').setScale(0.65);
       const NormalEel = this.add.image(490, 550, 'NormalEel').setScale(2);
           console.log(`NormalEel: x=${NormalEel.x}, y=${NormalEel.y}`);
       //if status = Hungry change.texture('HungryEel') and so on...
 // const placeholder = this.add.image(-,0 'placeholder').setScale(0.6);
       const JournalIcon = this.add.image(1128, 520, 'JournalIcon').setScale(0.61).setInteractive({
           hitArea: new Phaser.Geom.Rectangle(0, 0, 134, 116),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
        });
       console.log(`JournalIcon: x=${JournalIcon.x}, y=${JournalIcon.y}`);

       JournalIcon.on('pointerdown', (pointer) => {
    console.log('Journal button clicked at: ', pointer.x, pointer.y); 
       });

       const InventoryIcon = this.add.image(1027, 520, 'InventoryIcon').setScale(0.61).setInteractive({
           hitArea: new Phaser.Geom.Rectangle(0, 0, 134, 116),
     hitAreaCallback: Phaser.Geom.Rectangle.Contains,
     useHandCursor: true
        });
       console.log(`InventorylIcon: x=${InventoryIcon.x}, y=${InventoryIcon.y}`);

       InventoryIcon.on('pointerdown', (pointer) => {
    console.log('Inventory button clicked at: ', pointer.x, pointer.y); 
       });
    }

    //Translation check to see if soemthing can be translated
        //checkTranslation(word, dictionaryLines) {
            //let Transaltion = null;
            //dictionaryLines.forEach((line) +> {
                //let parts = line.split(':');
                //if (part.length === 2 ) {
                    //let key = parts[0].trim();
                    //let value = parts[1].trim();
                //if (key === word) {
                    //translation = value; }
            //}
    //}); return translation; }
    
    
                   
    

   update (){
//probably have constant updates to check if the player has been through the prolouge (taking the note offf the wall)
   }
}

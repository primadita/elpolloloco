import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Hen } from "./hen.class.js";
import { ImageManager } from "./image-manager.class.js";

export class World{
    // #region ATTRIBUTES
    canvas;
    ctx;
    character = new Character();
    chickens = [new Chicken(), new Chicken(), new Chicken()]
    hens = [new Hen(), new Hen(), new Hen()];
    henboss;
    coins;
    bottles;
    
    // #endregion
    
    constructor(canvas){
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }

    // #region METHODS
    draw(){
        // this.ctx.drawImage(ImageManager.pepe, this.character.xPos, this.character.yPos, this.character.width, this.character.height);
        this.ctx.drawImage(ImageManager.pepe[0], 100, 250, 100,200);
    }
    // #endregion
}
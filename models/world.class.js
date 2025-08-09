import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { Hen } from "./hen.class.js";
import { Henboss } from "./henboss.class.js";
import { ImageManager } from "./image-manager.class.js";
// import { Sky } from "./sky.class.js";

export class World{
    // #region ATTRIBUTES
    canvas;
    ctx;
    character = new Character();
    enemies = [new Hen(), new Hen(), new Hen(), new Chicken(), new Chicken(), new Henboss()];
    backgrounds = [new Cloud(), new Cloud()];
    coins;
    bottles;
    
    // #endregion
    
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.character;
        this.enemies;
        this.draw();
        // this.addBackgrounds();
        // this.chickens;
    }

    // #region METHODS
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.xPos, this.character.yPos, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.xPos, enemy.yPos, enemy.width, enemy.height);
        });
        this.backgrounds.forEach(bg => {
            this.ctx.drawImage(bg.img, bg.xPos, bg.yPos, bg.width, bg.height);
        });
        requestAnimationFrame(() => this.draw());
    }

    // addBackgrounds(){
    //     this.backgrounds = [
    //         new Sky(this.canvas),
    //         new Sky(this.canvas)
    //     ]
    // }
    // #endregion
}
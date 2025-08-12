import { level1 } from "../levels/level1.js";
import { Background } from "./background.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { LayerOne, LayerThree, LayerTwo } from "./desert.class.js";
import { Hen } from "./hen.class.js";
import { Henboss } from "./henboss.class.js";
import { ImageManager } from "./image-manager.class.js";
import { Sky } from "./sky.class.js";


export class World{
    // #region ATTRIBUTES
    canvas;
    ctx;
    character = new Character();
    level = level1;
    // enemies = level1.enemies;
    // backgrounds = [new Sky(),new Cloud(), new Cloud(), new Desert(ImageManager.BACKGROUND.thirdLayer[0]), new Desert(ImageManager.BACKGROUND.secondLayer[0]),
    //         new Desert(ImageManager.BACKGROUND.firstLayer[0])]; //funktioniert
    // clouds = level1.clouds;
    // clouds;
    // backgrounds = [
    //     new Background({_img: ImageManager.BACKGROUND.air, _xPos: 0}),
    //     new Background({_img: ImageManager.BACKGROUND.thirdLayer[0], _xPos: 0}), 
    //     new Background({_img: ImageManager.BACKGROUND.secondLayer[0], _xPos: 0}),
    //     new Background({_img: ImageManager.BACKGROUND.firstLayer[0], _xPos: 0})
    //     ];
    // backgrounds = level1.backgrounds;
    // backgrounds;
    coins;
    bottles;
    keyboard;
    cameraXDir = 0;
    
    // #endregion
    
    constructor(canvas, keyboard){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.backgrounds;
        this.character;
        this.enemies;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        // this.addBackgrounds();
        // this.chickens;
    }

    // #region METHODS
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraXDir, 0);
        this.drawElements(this.level.backgrounds);
        this.drawElements(this.level.clouds);
        this.drawElement(this.character);
        this.drawElements(this.level.enemies);
        this.ctx.translate(-this.cameraXDir, 0);
        
        requestAnimationFrame(() => this.draw());
    }

    drawElement(object){
        if(object.otherDirection){
            this.flipImage(object);
        }
        this.ctx.drawImage(object.img, object.xPos, object.yPos, object.width, object.height);

        if(object.otherDirection){
            this.ctx.restore();
            object.xPos = object.xPos * -1;
        }
    }

    drawElements(objects){
        objects.forEach(object => {
            this.drawElement(object);
        });
    }

    setWorld(){
        this.character.world = this;
    }

    flipImage(image){
        this.ctx.save();
        this.ctx.translate(image.width, 0);
        this.ctx.scale(-1, 1);
        image.xPos = image.xPos * -1;
    }
    // addBackgrounds(){
    //     this.backgrounds = [
    //         new Sky(this.canvas),
    //         new Sky(this.canvas)
    //     ]
    // }
    // #endregion
}
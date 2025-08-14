// import { level1 } from "../levels/level1.js";
import { Character } from "./character.class.js";
import { IntervalHub } from "./interval-hub.class.js";
import { Level } from "./level.class.js";


export class World{
    // #region ATTRIBUTES
    canvas;
    ctx;
    character = new Character();
    level = new Level();
    coins;
    bottles;
    keyboard;
    cameraXDir = 0;
    // #endregion
    
    constructor(canvas, keyboard){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        IntervalHub.startInterval(this.checkCollisions, 200);
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
        object.draw(this.ctx);
        object.drawFrame(this.ctx);
        object.getRealFrame();
        object.drawRealFrame(this.ctx);
        
        if(object.otherDirection){
            this.restoreFlipImage(object);
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

    restoreFlipImage(image){
        this.ctx.restore();
        image.xPos = image.xPos * -1;
    }
        
    checkCollisions = () => {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                console.log('Collision with character, energy ', enemy, this.character.energy)
            }
        });
    }
    // #endregion
}
import { DrawableObject } from "./drawable-object.class.js";
import { IntervalHub } from "./interval-hub.class.js";

export class MovableObject extends DrawableObject{
    // #region ATTRIBUTES
    xSpeed = 0.15;
    ySpeed = 0;
    realX;
    realY;
    realWidth;
    realHeight;
    offset = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
    };
    otherDirection = false;
    acceleration = 4;
    energy = 100;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img, _xSpeed, _ySpeed} = {}){
        super({_xPos, _yPos, _width, _height, _img});
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        // this.acceleration = _acceleration;
        // this.getRealFrame();
        // IntervalHub.startInterval(this.applyGravity, 1000 / 25);
    }

    // #region METHODS
    randomizeStartPoint(maxRange){
        this.xPos = this.xPos + Math.random() * maxRange;
    }

    playAnimation(imgArray){
        let i = this.currentImage % imgArray.length;
        let path = imgArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    
    moveRight = () => {
        this.otherDirection = false;
        this.xPos += this.xSpeed;
    }

    moveLeft = () => {
        this.xPos -= this.xSpeed;
    }

    applyGravity = () => {
        if(this.isAboveGround() || this.ySpeed > 0){ // ursprünglichen Wert von character.yPos
            this.yPos -= this.ySpeed;
            this.ySpeed -= this.acceleration;
        } 
    }

    isAboveGround(){
        return this.yPos + this.height < 455;
    }

    isColliding(mo){
        return this.realX + this.realWidth > mo.realX &&
            this.realY + this.realHeight > mo.realY &&
            this.realX < mo.realX + mo.realWidth &&
            this.realY < mo.realY + mo.realHeight;
    }
    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        }
    }

    isDead(){
        return this.energy == 0;
    }
    // #endregion
}
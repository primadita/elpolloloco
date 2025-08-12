import { DrawableObject } from "./drawable-object.class.js";
import { IntervalHub } from "./interval-hub.class.js";

export class MovableObject extends DrawableObject{
    // #region ATTRIBUTES
    xSpeed = 0.15;
    ySpeed;
    otherDirection = false;
    acceleration = 4;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img, _imgarray, _xSpeed, _ySpeed}={}){
        super({_xPos, _yPos, _width, _height, _img});
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        // this.moveLeft();
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
        if(this.isAboveGround()|| this.ySpeed > 0){ // ursprünglichen Wert von character.yPos
            this.yPos -= this.ySpeed;
            this.ySpeed -= this.acceleration
        } 
    }

    isAboveGround(){
        return this.yPos < 85;
    }
    // #endregion
}
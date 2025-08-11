import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject{
    // #region ATTRIBUTES
    xSpeed = 0.15;
    ySpeed;
    otherDirection = false;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img, _imgarray, _xSpeed, _ySpeed}={}){
        super({_xPos, _yPos, _width, _height, _img, _imgarray});
        this.xSpeed = _xSpeed;
        this.ySpeed = _ySpeed;
        // this.moveLeft();
    }

    // #region METHODS
    randomizeStartPoint(maxRange){
        this.xPos = this.xPos + Math.random() * maxRange;
    }

    walk(imgArray){
        let i = this.currentImage % imgArray.length;
        let path = imgArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    
    moveRight = () => {
        this.xPos += this.xSpeed;
    }

    moveLeft = () => {
        this.xPos -= this.xSpeed;
    }

    
    // #endregion
}
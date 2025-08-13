import { MovableObject } from "./movable-object.class.js";

export class DrawableObject{
    // #region ATTRIBUTES
    xPos = 100;
    yPos = 200;
    width = 100;
    height = 200;
    realX;
    realY;
    realWidth;
    realHeight;
    offset = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    img;
    imageCache = {};
    currentImage = 0;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img} = {}){
        this.xPos = _xPos;
        this.yPos = _yPos;
        this.width = _width;
        this.height = _height;
        this.loadImage(_img);
        // this.getRealFrame();
        // this.loadImages(_imgarray);
    }

    // #region METHODS
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and caches them.
     * @param {string[]} patharray - An array of image file paths to load and cache.
     */
    loadImages(patharray){
        patharray.forEach((path) => {
            let images = new Image();
            images.src = path;
            this.imageCache[path] = images;
        });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
    }

    drawFrame(ctx){
        if (this instanceof MovableObject){
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "blue";
            ctx.rect(this.xPos, this.yPos, this.width, this.height);
            ctx.stroke();
        }
    }

    getRealFrame(){
        this.realX = this.xPos + this.offset.left;
        this.realY = this.yPos + this.offset.top;
        this.realWidth = this.width - this.offset.left - this.offset.right;
        this.realHeight = this.height - this.offset.top - this.offset.bottom;
    }

    drawRealFrame(ctx){
        if (this instanceof MovableObject){
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "red";
            ctx.rect(this.realX, this.realY, this.realWidth, this.realHeight);
            ctx.stroke();
        }
    }
    // #endregion
}
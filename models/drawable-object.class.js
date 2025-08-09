export class DrawableObject{
    // #region ATTRIBUTES
    xPos = 100;
    yPos = 200;
    width = 100;
    height = 200;
    img;
    imageCache = {};
    currentImage = 0;
    // #endregion
    
    constructor({_xPos, _yPos, _width, _height, _img} = {}){
        this.xPos = _xPos;
        this.yPos = _yPos;
        this.width = _width;
        this.height = _height;
        // this.img = _img;
        this.loadImage(_img);
    }

    // #region METHODS
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
    // #endregion
}
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
        this.loadImage(_img);
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
    // #endregion
}
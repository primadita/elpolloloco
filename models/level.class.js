export class Level{
    // #region ATTRIBUTES
    enemies;
    clouds;
    backgrounds;
    levelEndPos = 1300;
    // #endregion

    constructor({_enemies, _clouds, _bg}){
        this.enemies = _enemies;
        this.clouds = _clouds;
        this.backgrounds = _bg;
    }
    // #region METHODS
    // #endregion
}
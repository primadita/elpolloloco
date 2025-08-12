import { Keyboard } from "./models/keyboard.class.js";
import { Level } from "./models/level.class.js";
import { World } from "./models/world.class.js";

let canvas;
let world;
// let level1;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    // level1 = new Level({
    // _clouds: [new Cloud(), new Cloud()],
    // _enemies: [new Hen(), new Hen(), new Hen(), new Chicken(), new Chicken(), new Henboss()],
    // _bg: [new Sky(), new Sky(), new Desert(0), new Desert(1)]});
    window.world = world;
}
init();

window.addEventListener("keydown",(e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38){
        keyboard.UP = true;
    }
});
window.addEventListener("keyup",(e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38){
        keyboard.UP = false;
    }
})
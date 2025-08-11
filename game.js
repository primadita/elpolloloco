import { Keyboard } from "./models/keyboard.class.js";
import { World } from "./models/world.class.js";

let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    world.setWorld();
    window.world = world;
    // character.src = '../assets/img/2_character_pepe/1_idle/idle/I-1.png';
    
    // setTimeout(function(){
    //     ctx.drawImage(character, 100 , 250, 100, 200);
    // }, 2000);
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
import { Chicken } from "../models/chicken.class.js";
import { Cloud } from "../models/cloud.class.js";
import { Desert } from "../models/desert.class.js";
import { Hen } from "../models/hen.class.js";
import { Henboss } from "../models/henboss.class.js";
import { Level } from "../models/level.class.js";
import { Sky } from "../models/sky.class.js";

export const level1 = new Level({
    _clouds: [new Cloud(), new Cloud()],
    _enemies: [new Hen(), new Hen(), new Hen(), new Chicken(), new Chicken(), new Henboss()],
    _bg: [new Sky(), new Sky(), new Sky(), new Desert(0), new Desert(1), new Desert(0)]
});
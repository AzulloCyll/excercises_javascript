import "core-js/stable";
import "regenerator-runtime/runtime";

import { board } from "./board";
import { Visualiser } from "./visualiser";

const visualiser = new Visualiser(board);
visualiser.createBoard(board);

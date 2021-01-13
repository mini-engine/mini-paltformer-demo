import { Game } from "mini-engine";
import { Stage01 } from "./Scene/Stage01";

const containerElement = document.getElementById("app");

const config = {
    containerNode: containerElement,
    gameWidth: 1000,
    gameHeight: 562,
    uiEnabled: true,
    debugEnabled: false,
    bgColor: "#967557",
};

// Create the Game
const game = new Game(config);

// Add a scene
game.addScene("Stage01", () => new Stage01());

// Run the game
game.run();

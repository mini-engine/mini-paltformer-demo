import { Game } from "mini-engine";
import { Stage01 } from "./Scene/Stage01";

const containerElement = document.getElementById("app");

// Create the Game
const game = new Game({
    containerNode: containerElement,
    gameWidth: 1000,
    gameHeight: 562,
    uiEnabled: true,
    debugEnabled: true,
    bgColor: "#967557",
});

// Add a scene
game.addScene("Stage01", () => new Stage01());

// Run the game
game.run();
